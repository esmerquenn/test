import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Components/SideBarComponents/Sidebar";
import Footer from "../Components/FooterComponents/Footer";

function Layout() {
  const [toggle, setToggle] = useState(false);
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

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";
  return (
    <>
      {isHomePage ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <div className="bg_green">
          <div className="container  flex_container">
            <div onClick={handleToggle} className="sidebar_div">
              <Sidebar toggle={toggle} />
            </div>
            <div onClick={handleToggle} className={`blur_div ${toggle ? "cover" : " "}`}></div>
            <main className={` content ${toggle ? "blur" : ""}`}>
              <Outlet />
            </main>
          </div>
          <div className={isContactPage ? "footer_absolute" : ""}>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
