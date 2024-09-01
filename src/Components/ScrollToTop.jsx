import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: "10px",
      opacity: 1,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top ${showButton ? "show" : "hidden_scroll"}`} onClick={scrollToTop}>
      <div className="scroll_div">
        <img src="/img/scrool.png" alt="" />
      </div>
    </div>
  );
};

export default ScrollToTop;
