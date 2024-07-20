import React, { useEffect, useRef, useState } from "react";
import useWidth from "../../Hooks/UseWidth";
// import './VideoBg.css'
const Rovshan = ({ isPlayed, setIsPlayed,setLoading , loading }) => {
  const width = useWidth();
  const videoRef = useRef();

  const splashDesktop = "/assets/video/splash-screen-desktop.webm";
  const loopDesktop = "/assets/video/desktop-loop.webm";
  const splashMobile = "/assets/video/splash-screen-mobile.webm";
  const loopMobile = "/assets/video/mobile-loop.webm";

  const handleCanPlayThrough = (videoElement, loop) => {
    videoElement.play();
    videoElement.playsInline = true;
    videoElement.loop = loop;
    setLoading(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const setVideoSourceAndPlay = (src, loop) => {
      setLoading(true);
      videoElement.src = src;
      videoElement.load();
      videoElement.addEventListener("canplaythrough", () => handleCanPlayThrough(videoElement, loop), { once: true });
    };

    const handleVideoEnded = () => {
      localStorage.setItem("isPlayed", JSON.stringify(true));
      setIsPlayed(true);
      setTimeout(() => {
        const loopSrc = width > 548 ? loopDesktop : loopMobile;
        setVideoSourceAndPlay(loopSrc, true);
      }, 10);
    };

    if (width > 548) {
      if (isPlayed) {
        setVideoSourceAndPlay(loopDesktop, true);
      } else {
        setVideoSourceAndPlay(splashDesktop, false);
        videoElement.addEventListener("ended", handleVideoEnded, { once: true });
      }
    } else {
      if (isPlayed) {
        setVideoSourceAndPlay(loopMobile, true);
      } else {
        setVideoSourceAndPlay(splashMobile, false);
        videoElement.addEventListener("ended", handleVideoEnded, { once: true });
      }
    }

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, [setIsPlayed]);

  return (
    <div className="videobg-container">
      {loading && !isPlayed ? (
        <div className="loading">
          <div className="loader_login"></div>
        </div>
      ) : null}
      <video 
      ref={videoRef}
       autoPlay
        className="video_bg video-element" 
        playsInline 
        preload="auto" 
        muted
        style={{display:"block"}}
        ></video>
    </div>
  );
};

export default Rovshan;
