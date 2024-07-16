import React from "react";
import "./../../assets/css/Footer.css";
import behance from "./../../assets/img/behance.png";
import instagram from "./../../assets/img/instagram.png";
import facebook from "./../../assets/img/facebook.png";
import phone from "./../../assets/img/phone.png";
import pinterest from "./../../assets/img/pinterest.png";
import linkedin from "./../../assets/img/linkedin.png";
import SliderBrands from "./SliderBrands";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname !== "/contact";
  return (
    <>
      {isContactPage && <SliderBrands />}
      <footer className="footer">
        <div className="foot">
          <div className="icons">
            <img src={behance} alt="behance" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={phone} alt="phone" />
            <img src={pinterest} alt="pinterest" />
            <img src={linkedin} alt="linkedin" />
          </div>
          <a href="mailto:methGdd@gmail.com">MethGdd@gmail.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
