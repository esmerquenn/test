import React, { useEffect, useRef, useState } from "react";
import useWidth from "../../Hooks/UseWidth";

const Rovshan = ({ isPlayed, setIsPlayed }) => {
  const width = useWidth();
  const videoRef = useRef();
  const [loading, setLoading] = useState(true);

  const splashDesktop = "/assets/video/splash-screen-desktop.mp4";
  const loopDesktop = "/assets/video/desktop-loop.mp4";
  const splashMobile = "/assets/video/splash-screen-mobile.mp4";
  const loopMobile = "/assets/video/mobile-loop.mp4";

  useEffect(() => {
    const videoElement = videoRef.current;
    if (width > 548) {
      if (isPlayed) {
        videoElement.src = loopDesktop;
        videoElement.loop = true;
        console.log("dasdasd");
      } else {
        videoElement.src = splashDesktop;
        videoElement.addEventListener("ended", () => {
          localStorage.setItem("isPlayed", JSON.stringify(true));
          setIsPlayed(true);
          setTimeout(() => {
            videoElement.src = loopDesktop;
            videoElement.play();
          }, 10);
        });
      }
    } else {
      if (isPlayed) {
        videoElement.src = loopMobile;
        videoElement.loop = true;
        console.log("dasdasd");
      } else {
        videoElement.src = splashMobile;
        videoElement.addEventListener("ended", () => {
          localStorage.setItem("isPlayed", JSON.stringify(true));
          setIsPlayed(true);
          setTimeout(() => {
            videoElement.src = loopMobile;
            videoElement.play();
          }, 10);
        });
      }
    }
  }, [isPlayed, setIsPlayed]);

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
