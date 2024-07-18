import React, { useEffect, useRef, useState } from "react";
import useWidth from "../../Hooks/UseWidth";

const Rovshan = ({ isPlayed, setIsPlayed }) => {
  const width = useWidth();
  const videoRef = useRef();
  const [loading, setLoading] = useState(true);

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
    if (width < 548) {
      if (isPlayed) {
        videoElement.src = loopDesktop;
        handleVideoPlay(videoElement);
      } else {
        videoElement.src = splashDesktop;
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
        handleVideoPlay(videoElement);
      } else {
        videoElement.src = splashMobile;
        handleVideoPlay(videoElement, false);
        videoElement.addEventListener("ended", () => {
          localStorage.setItem("isPlayed", JSON.stringify(true));
          setIsPlayed(true);

          setTimeout(() => {
            videoElement.src = loopMobile;
            handleVideoPlay(videoElement);
          }, 10);
        });
      }
    }
  }, [setIsPlayed]);

  return (
    <div className="videobg-container">
      {/* {loading && !isPlayed ? (
        <div className="loading">
          <div className="loader_login"></div>
        </div>
      ) : null} */}
      <video ref={videoRef} autoPlay className={`video_bg video-element`} playsInline preload="auto" muted></video>
    </div>
  );
};

export default Rovshan;
