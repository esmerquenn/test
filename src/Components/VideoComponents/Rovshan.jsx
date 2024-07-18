import React, { useEffect, useRef, useState } from "react";
import useWidth from "../../Hooks/UseWidth";

const Rovshan = ({ isPlayed, setIsPlayed }) => {
  const width = useWidth();
  const videoRef = useRef();
  const [loading, setLoading] = useState(true);
  const errorRef = useRef();

  const splashDesktop = "/assets/video/splash-screen-desktop.webm";
  const loopDesktop = "/assets/video/desktop-loop.webm";
  const splashMobile = "/assets/video/splash-screen-mobile.webm";
  const loopMobile = "/assets/video/mobile-loop.webm";

  const handleVideoPlay = (videoElement, loop = true) => {
    videoElement.addEventListener("canplaythrough", () => {
      videoElement.play();
      videoElement.loop = loop;
    });
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (width > 548) {
      if (isPlayed) {
        videoElement.src = loopDesktop;
        videoElement.load();
        handleVideoPlay(videoElement);
      } else {
        videoElement.src = splashDesktop;
        videoElement.load();
        handleVideoPlay(videoElement, false);
        videoElement.addEventListener("ended", () => {
          localStorage.setItem("isPlayed", JSON.stringify(true));
          setIsPlayed(true);

          setTimeout(() => {
            videoElement.src = loopDesktop;
            handleVideoPlay(videoElement);
          }, 10);
        });
      }
    } else {
      if (isPlayed) {
        videoElement.src = loopMobile;
        videoElement.load();
        handleVideoPlay(videoElement);
      } else {
        videoElement.src = splashMobile;
        videoElement.load();
        handleVideoPlay(videoElement, false);
        videoElement.addEventListener("ended", () => {
          localStorage.setItem("isPlayed", JSON.stringify(true));
          setIsPlayed(true);

          setTimeout(() => {
            videoElement.src = loopMobile;
            videoElement.load();
            handleVideoPlay(videoElement);
          }, 10);
        });
      }
    }
    videoElement.addEventListener("error", (e) => {
      console.error(`Error loading: ${JSON.stringify(e)}`);
      alert(`Error loading: ${JSON.stringify(e)}`);
      errorRef.innerHTML = JSON.stringify(e);
    });
  }, [setIsPlayed]);

  return (
    <div className="videobg-container">
      {/* {loading && !isPlayed ? (
        <div className="loading">
          <div className="loader_login"></div>
        </div>
      ) : null} */}
      <video ref={videoRef} autoPlay className={`video_bg video-element`} playsInline preload="auto" muted></video>
      <div ref={errorRef}> </div>
    </div>
  );
};

export default Rovshan;
