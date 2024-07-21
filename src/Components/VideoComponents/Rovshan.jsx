// import React, { useEffect, useRef, useState } from "react";
// import useWidth from "../../Hooks/UseWidth";
// const Rovshan = ({ isPlayed, setIsPlayed, setLoading, loading }) => {
//   const width = useWidth();
//   const videoRef = useRef();
//   const [videoVisible, setVideoVisible] = useState(true);

//   const splashDesktop = "/assets/video/splash-screen-desktop.webm";
//   const loopDesktop = "/assets/video/desktop-loop.webm";
//   const splashMobile = "/assets/video/splash-screen-mobile.webm";
//   const loopMobile = "/assets/video/mobile-loop.webm";

//   const handleCanPlayThrough = (videoElement, loop) => {
//     videoElement.play();
//     videoElement.playsInline = true;
//     videoElement.loop = loop;
//     setLoading(false);
//     if (loop) {
//       setTimeout(() => setVideoVisible(true), 5000); // 5 seconds delay to match sidebar
//     }
//   };

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const setVideoSourceAndPlay = (src, loop) => {
//       setLoading(true);
//       setVideoVisible(false);
//       videoElement.src = src;
//       videoElement.load();
//       videoElement.addEventListener("canplaythrough", () => handleCanPlayThrough(videoElement, loop), { once: true });
//     };

//     const handleVideoEnded = () => {
//       sessionStorage.setItem("isPlayed", JSON.stringify(true));
//       setIsPlayed(true);
//       setVideoVisible(false);
//       setTimeout(() => {
//         const loopSrc = width > 548 ? loopDesktop : loopMobile;
//         setVideoSourceAndPlay(loopSrc, true);
//       }, 10);
//     };

//     if (width > 548) {
//       if (isPlayed) {
//         setVideoSourceAndPlay(loopDesktop, true);
//         setVideoVisible(true);
//       } else {
//         setVideoSourceAndPlay(splashDesktop, false);
//         videoElement.addEventListener("ended", handleVideoEnded, { once: true });
//       }
//     } else {
//       if (isPlayed) {
//         setVideoSourceAndPlay(loopMobile, true);
//         setVideoVisible(true);
//       } else {
//         setVideoSourceAndPlay(splashMobile, false);
//         videoElement.addEventListener("ended", handleVideoEnded, { once: true });
//       }
//     }

//     return () => {
//       videoElement.removeEventListener("ended", handleVideoEnded);
//     };
//   }, [setIsPlayed]);

//   return (
//     <div className="videobg-container">
//       {loading && !isPlayed ? (
//         <div className="loading">
//           <div className="loader_login"></div>
//         </div>
//       ) : null}
//       <video
//         ref={videoRef}
//         autoPlay
//         className={`video_bg video-element ${videoVisible ? "visible" : "hidden"}`}
//         playsInline
//         preload="auto"
//         muted
//         style={{ display: "block" }}
//       ></video>
//     </div>
//   );
// };

// export default Rovshan;
// import React, { useEffect, useRef, useState } from "react";
// import useWidth from "../../Hooks/UseWidth";

// const Rovshan = ({ isPlayed, setIsPlayed, setLoading, loading }) => {
//   const width = useWidth();
//   const videoRef = useRef();
//   const [videoVisible, setVideoVisible] = useState(false);

//   const splashDesktop = "/assets/video/splash-screen-desktop.webm";
//   const loopDesktop = "/assets/video/desktop-loop.webm";
//   const splashMobile = "/assets/video/splash-screen-mobile.webm";
//   const loopMobile = "/assets/video/mobile-loop.webm";

//   const handleCanPlayThrough = (videoElement, loop) => {
//     videoElement.play();
//     videoElement.playsInline = true;
//     videoElement.loop = loop;
//     setLoading(false);

//     if (loop) {
//       videoElement.style.opacity = 0;
//       setTimeout(() => {
//         videoElement.style.transition = "opacity 5s";
//         videoElement.style.opacity = 1;
//       }, 500); // 50 ms delay to ensure the transition is applied correctly
//     } else {
//       videoElement.style.opacity = 1;
//     }
//   };

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const setVideoSourceAndPlay = (src, loop) => {
//       setLoading(true);
//       videoElement.src = src;
//       videoElement.load();
//       videoElement.addEventListener("canplaythrough", () => handleCanPlayThrough(videoElement, loop), { once: true });
//     };

//     const handleVideoEnded = () => {
//       sessionStorage.setItem("isPlayed", JSON.stringify(true));
//       setIsPlayed(true);
//       const loopSrc = width > 548 ? loopDesktop : loopMobile;
//       setVideoSourceAndPlay(loopSrc, true);
//     };

//     if (width > 548) {
//       if (isPlayed) {
//         setVideoSourceAndPlay(loopDesktop, true);
//       } else {
//         setVideoSourceAndPlay(splashDesktop, false);
//         videoElement.addEventListener("ended", handleVideoEnded, { once: true });
//       }
//     } else {
//       if (isPlayed) {
//         setVideoSourceAndPlay(loopMobile, true);
//       } else {
//         setVideoSourceAndPlay(splashMobile, false);
//         videoElement.addEventListener("ended", handleVideoEnded, { once: true });
//       }
//     }

//     return () => {
//       videoElement.removeEventListener("ended", handleVideoEnded);
//     };
//   }, [isPlayed, setIsPlayed, width]);

//   return (
//     <div className="videobg-container">
//       {loading && !isPlayed ? (
//         <div className="loading">
//           <div className="loader_login"></div>
//         </div>
//       ) : null}
//       <video
//         ref={videoRef}
//         autoPlay
//         className="video_bg video-element"
//         playsInline
//         preload="auto"
//         muted
//         style={{ display: "block" }}
//       ></video>
//     </div>
//   );
// };

// export default Rovshan;

// import React, { useEffect, useRef } from "react";
// import useWidth from "../../Hooks/UseWidth";

// const Rovshan = ({ isPlayed, setIsPlayed, setLoading, loading }) => {
//   const width = useWidth();
//   const videoRef = useRef();

//   const splashDesktop = "/assets/video/splash-screen-desktop.webm";
//   const loopDesktop = "/assets/video/desktop-loop.webm";
//   const splashMobile = "/assets/video/splash-screen-mobile.webm";
//   const loopMobile = "/assets/video/mobile-loop.webm";

//   const handleCanPlayThrough = (videoElement, loop) => {
//     if (loop) {
//       videoElement.style.opacity = 0;
//       setTimeout(() => {
//         videoElement.style.transition = "opacity 5s ease-in-out";
//         videoElement.style.opacity = 1;
//       }, 1000);
//     }
//     else{
//       videoElement.style.opacity = 1;

//     }
//     videoElement.play();
//     videoElement.playsInline = true;
//     videoElement.loop = loop;
//     setLoading(false);
//   };

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     const setVideoSourceAndPlay = (src, loop) => {
//       console.log(videoElement.src,loop, 'src');
//       if (loop) {
//         videoElement.style.opacity = 0;
//       } else {
//         videoElement.style.opacity = 1;
//       }
//       videoElement.src = src;
//       setLoading(true);
//       videoElement.load();
//       videoElement.addEventListener("canplaythrough", () => handleCanPlayThrough(videoElement, loop), { once: true });
//     };

//     const handleVideoEnded = () => {
//       sessionStorage.setItem("isPlayed", JSON.stringify(true));
//       setIsPlayed(true);
//       const loopSrc = width > 548 ? loopDesktop : loopMobile;
//       setVideoSourceAndPlay(loopSrc, true);
//     };

//     if (width > 548) {
//       if (isPlayed) {
//         setVideoSourceAndPlay(loopDesktop, true);
//       } else {
//         setVideoSourceAndPlay(splashDesktop, false);
//         videoElement.addEventListener("ended", handleVideoEnded, { once: true });
//       }
//     } else {
//       if (isPlayed) {
//         setVideoSourceAndPlay(loopMobile, true);
//       } else {
//         setVideoSourceAndPlay(splashMobile, false);
//         videoElement.addEventListener("ended", handleVideoEnded, { once: true });
//       }
//     }

//     return () => {
//       videoElement.removeEventListener("ended", handleVideoEnded);
//     };
//   }, [isPlayed, setIsPlayed, width]);

//   return (
//     <div className="videobg-container">
//       {loading && !isPlayed ? (
//         <div className="loading">
//           <div className="loader_login"></div>
//         </div>
//       ) : null}
//       <video
//         ref={videoRef}
//         autoPlay
//         className="video_bg video-element"
//         playsInline
//         preload="auto"
//         muted
//         style={{ display: "block" }}
//       ></video>
//     </div>
//   );
// };

// export default Rovshan;

import React, { useEffect, useRef } from "react";
import useWidth from "../../Hooks/UseWidth";

const Rovshan = ({ isPlayed, setIsPlayed, setLoading, loading, hasVisited }) => {
  const width = useWidth();
  const videoRef = useRef();

  const splashDesktop = "/assets/video/splash-screen-desktop.webm";
  const loopDesktop = "/assets/video/desktop-loop.webm";
  const splashMobile = "/assets/video/splash-screen-mobile.webm";
  const loopMobile = "/assets/video/mobile-loop.webm";

  const handleCanPlayThrough = (videoElement, loop) => {
    if (loop) {
      setTimeout(() => {
        videoElement.style.transition = "opacity 4s ease-in-out";
        videoElement.style.opacity = 1;
      }, 10);
    }
    videoElement.play();
    videoElement.playsInline = true;
    videoElement.loop = loop;
    setLoading(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const setVideoSourceAndPlay = (src, loop) => {
      videoElement.style.transition = "none"; // Remove any transition to set initial opacity
      videoElement.style.opacity = hasVisited ? 1 : loop ? 0 : 1; // Ensure the first video is visible, second video starts hidden
      videoElement.src = src;
      setLoading(true);
      videoElement.load();
      videoElement.addEventListener("canplaythrough", () => handleCanPlayThrough(videoElement, loop), { once: true });
    };

    const handleVideoEnded = () => {
      sessionStorage.setItem("isPlayed", JSON.stringify(true));
      setIsPlayed(true);
      const loopSrc = width > 548 ? loopDesktop : loopMobile;
      setVideoSourceAndPlay(loopSrc, true);
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
  }, [isPlayed, setIsPlayed, width, hasVisited]);

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
        style={{ display: "block" }}
      ></video>
    </div>
  );
};

export default Rovshan;
