import React, { useEffect, useState } from "react";
import LazyLoadBackgroundVideo from "../Components/VideoComponents/LazyLoadBackgroundVideo";
import Sidebar from "../Components/SideBarComponents/Sidebar";
import Rovshan from "../Components/VideoComponents/Rovshan";

function Login() {
  const [toggle, setToggle] = useState(false);
  const [isPlayed, setIsPlayed] = useState(() => JSON.parse(localStorage.getItem("isPlayed")) || false);

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
    console.log(isPlayed);
  }, [setIsPlayed]);
  return (
    <div className="login_me ">
      <div onClick={handleToggle} className={`sidebar_div container flex_container invisible ${isPlayed ? "visible" : ""}`}>
        <Sidebar toggle={toggle} />
      </div>
      <div onClick={handleToggle} className={`blur_div esmer ${toggle ? "cover" : " "}`}></div>
      <div className="video_div">
        <Rovshan {...{ isPlayed, setIsPlayed }} />
      </div>
    </div>
  );
}

export default Login;
