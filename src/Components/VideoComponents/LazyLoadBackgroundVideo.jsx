// import { useEffect, useRef, useState } from "react";
// import useWidth from "./../../Hooks/UseWidth";
// import video1 from "./../../assets/video/2.mp4";
// import video2 from "./../../assets/video/anime002.mp4";
// import video3 from "./../../assets/video/aaa.mp4";
// import video4 from "./../../assets/video/new4.mp4";
// import "./VideoBg.css";
// import { useLocation } from "react-router-dom";

// function LazyLoadBackgroundVideo({ isPlayed, setIsPlayed }) {
//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);
//   const width = useWidth();
//   const [loading, setLoading] = useState(true);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (pathname == "/") {
//       const handleVideo1Ended = () => {
//         localStorage.setItem("isPlayed", JSON.stringify(true));
//         setIsPlayed(() => JSON.parse(localStorage.getItem("isPlayed")));
//         videoRef1.current.style.display = "none";
//         videoRef2.current.style.display = "block";
//         videoRef2.current.play();
//       };

//       const handleVideoLoaded = () => {
//         setLoading(false);
//       };
//       if (videoRef1.current && videoRef2.current) {
//         videoRef1.current.addEventListener("ended", handleVideo1Ended);
//         videoRef1.current.addEventListener("canplaythrough", handleVideoLoaded);
//         videoRef2.current.addEventListener("canplaythrough", handleVideoLoaded);
//       }

//       return () => {
//         if (videoRef1.current && videoRef2.current) {
//           videoRef2.current.removeEventListener("canplaythrough", handleVideoLoaded);
//           videoRef1.current.removeEventListener("canplaythrough", handleVideoLoaded);
//         }
//       };
//     }
//   }, [width, pathname]);

//   useEffect(() => {
//     if (pathname == "/") {
//       setLoading(true);
//       const playVideo = () => {
//         if (width < 548) {
//           videoRef1.current.src = video3;
//           videoRef2.current.src = video4;
//           videoRef2.current.play();
//         } else {
//           videoRef1.current.src = video1;
//           videoRef2.current.src = video2;
//           videoRef1.current.play().catch((error) => {
//             console.error("Video oynatılamadı:", error);
//           });
//         }
//       };
//       if (isPlayed) {
//         videoRef1.current.style.display = "none";
//         videoRef2.current.style.display = "block";
//         videoRef2.current.play();
//       } else {
//         videoRef1.current.play();
//       }

//       if (videoRef2.current) {
//         playVideo();
//       }

//       const handleUserInteraction = () => {
//         playVideo();
//         document.removeEventListener("click", handleUserInteraction);
//         document.removeEventListener("touchstart", handleUserInteraction);
//       };

//       document.addEventListener("click", handleUserInteraction);
//       document.addEventListener("touchstart", handleUserInteraction);

//       return () => {
//         document.removeEventListener("click", handleUserInteraction);
//         document.removeEventListener("touchstart", handleUserInteraction);
//       };
//     }
//   }, [width, pathname, isPlayed]);

//   return (
//     <div className="videobg-container">
//       {loading && !isPlayed ? (
//         <div className="loading">
//           <div className="loader"></div>
//         </div>
//       ) : (
//         ""
//       )}
//       <video
//         ref={videoRef1}
//         className="video_bg video-element"
//         playsInline
//         preload="auto"
//         autoPlay
//         muted
//         style={{ display: isPlayed ? "none" : "block" }}
//       >
//         <source src={video1} type="video/mp4" />
//       </video>

//       <video
//         ref={videoRef2}
//         autoPlay={isPlayed}
//         className="video_bg video-element"
//         playsInline
//         preload="auto"
//         muted
//         loop
//         style={{ display: "none" }}
//       >
//         <source src={video2} type="video/mp4" />
//       </video>
//     </div>
//   );
// }

// export default LazyLoadBackgroundVideo;

import { useEffect, useRef, useState } from "react";
import useWidth from "./../../Hooks/UseWidth";
import video1 from "./../../assets/video/2.mp4";
import video2 from "./../../assets/video/anime002.mp4";
import video3 from "./../../assets/video/aaa.mp4";
import video4 from "./../../assets/video/new4.mp4";
import "./VideoBg.css";
import { useLocation } from "react-router-dom";

function LazyLoadBackgroundVideo({ isPlayed, setIsPlayed }) {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const width = useWidth();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      const handleVideo1Ended = () => {
        localStorage.setItem("isPlayed", JSON.stringify(true));
        setIsPlayed(true);
        videoRef1.current.classList.add("hidden");
        console.log('add');
        setTimeout(() => {
          videoRef1.current.style.display = "none";
          videoRef2.current.style.display = "block";
          videoRef2.current.classList.remove("hidden");
          console.log('remove');
          videoRef2.current.play();
        }, 1000); // Geçiş süresi (1 saniye)
      };

      const handleVideoLoaded = () => {
        setLoading(false);
      };

      const video1Element = videoRef1.current;
      const video2Element = videoRef2.current;

      if (video1Element && video2Element) {
        video1Element.addEventListener("ended", handleVideo1Ended);
        video1Element.addEventListener("canplaythrough", handleVideoLoaded);
        video2Element.addEventListener("canplaythrough", handleVideoLoaded);
      }

      return () => {
        if (video1Element && video2Element) {
          video1Element.removeEventListener("ended", handleVideo1Ended);
          video1Element.removeEventListener("canplaythrough", handleVideoLoaded);
          video2Element.removeEventListener("canplaythrough", handleVideoLoaded);
        }
      };
    }
  }, [pathname, setIsPlayed]);

  useEffect(() => {
    if (pathname === "/") {
      setLoading(true);

      const playVideo = () => {
        if (width < 548) {
          videoRef1.current.src = video3;
          videoRef2.current.src = video4;
        } else {
          videoRef1.current.src = video1;
          videoRef2.current.src = video2;
        }
        if (isPlayed) {
          videoRef1.current.style.display = "none";
          videoRef2.current.style.display = "block";
          videoRef2.current.play();
        } else {
          videoRef1.current.style.display = "block";
          videoRef2.current.style.display = "none";
          videoRef1.current.play().catch((error) => {
            console.error("Video oynatılamadı:", error);
          });
        }
      };

      playVideo();

      const handleUserInteraction = () => {
        playVideo();
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("touchstart", handleUserInteraction);
      };

      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("touchstart", handleUserInteraction);

      return () => {
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("touchstart", handleUserInteraction);
      };
    }
  }, [pathname, width, isPlayed]);

  return (
    <div className="videobg-container">
      {loading && !isPlayed ? (
        <div className="loading">
          <div className="loader_login"></div>
        </div>
      ) : null}
      <video
        ref={videoRef1}
        className={`video_bg video-element ${isPlayed ? "hidden" : ""}`}
        playsInline
        preload="auto"
        autoPlay
        muted
        style={{ display: isPlayed ? "none" : "block" }}
      >
        <source src={video1} type="video/mp4" />
      </video>

      <video
        ref={videoRef2}
        autoPlay={isPlayed}
        className="video_bg video-element"
        playsInline
        preload="auto"
        muted
        loop
        style={{ display: "none" }}
      >
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  );
}

export default LazyLoadBackgroundVideo;
