// import React, { useEffect, useState } from "react";
// import Sidebar from "../Components/SideBarComponents/Sidebar";
// import Rovshan from "../Components/VideoComponents/Rovshan";

// function Home() {
//   const [toggle, setToggle] = useState(false);
//   const [isPlayed, setIsPlayed] = useState(() => JSON.parse(sessionStorage.getItem("isPlayed")) || false);
//   const [loading, setLoading] = useState(true);

//   const handleToggle = () => {
//     setToggle((prev) => !prev);
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       setToggle(false);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     console.log(isPlayed);
//   }, [setIsPlayed]);
//   return (
//     <div className="login_me ">
//       <div onClick={handleToggle} className={`sidebar_div container flex_container invisible ${isPlayed && !loading  ? "visible" : ""}`}>
//         <Sidebar toggle={toggle} />
//       </div>
//       <div onClick={handleToggle} className={`blur_div esmer ${toggle ? "cover" : " "}`}></div>
//       <div className="video_div">
//         <Rovshan {...{ isPlayed, setIsPlayed, setLoading, loading }} />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import Sidebar from "../Components/SideBarComponents/Sidebar";
import HomeVideo from "../Components/VideoComponents/HomeVideo";
import useWidth from './../Hooks/UseWidth'
function Home() {
  const [toggle, setToggle] = useState(false);
  const [isPlayed, setIsPlayed] = useState(() => JSON.parse(sessionStorage.getItem("isPlayed")) || false);
  const [loading, setLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(() => JSON.parse(sessionStorage.getItem("hasVisited")) || false);
const width = useWidth()
console.log(width, 'width');
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setToggle(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  useEffect(() => {
    if (isPlayed && !loading) {
      setHasVisited(true);
      sessionStorage.setItem("hasVisited", JSON.stringify(true));
    }
  }, [isPlayed, loading]);

  return (
    <div className="login_me ">
      <div onClick={handleToggle} className={`sidebar_div container flex_container invisible ${isPlayed && !loading || hasVisited ? "visible" : ""} ${toggle && width<768 ? "homebar_bg": ""}`}>
        <Sidebar toggle={toggle} />
      </div>
      <div onClick={handleToggle} className={`blur_div esmer ${toggle ? "cover" : " "}`}></div>
      <div className="video_div">
        <HomeVideo {...{ isPlayed, setIsPlayed, setLoading, loading, hasVisited }} />
      </div>
    </div>
  );
}

export default Home;

