// SIDE BAR *WHICH IS ON THE LEFT

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useWidth from "../../Hooks/UseWidth";
import NavMenu from "./NavMenu";
import useLanguageChange from "../../Hooks/useLanguageChange";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  const { t, i18n } = useTranslation();
  useLanguageChange(i18n);

  const [isFixed, setIsFixed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  async function setLanguage(lang) {
    localStorage.setItem("i18Next", lang);
    await i18n.changeLanguage(lang);
  }
  const width = useWidth();
  useEffect(() => {
    let timer;
    if (toggle) {
      setIsFixed(true);
    } else {
      timer = setTimeout(() => {
        setIsFixed(false);
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [toggle]);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div
      className={`sidebar  ${toggle ? "active" : ""} ${isFixed ? "fixed" : ""} ${!isHomePage ? "sidebar_bg" : ""} ${
        isHomePage && toggle && width < 768 ? "homebar_bg" : ""
      }`}
    >
      <div className="nav_menu ">
        <div className={`lang ${toggle ? "langing" : ""}`}>
          <button onClick={() => setLanguage("az")}>az</button>
          <button onClick={() => setLanguage("en")}>en</button>
          <button onClick={() => setLanguage("ru")} className="last">
            ru
          </button>
        </div>
        <div className="logos">
          <Link className="logo" to="/">
            <img src="/img/MethGdd.png" alt="Logo" />
          </Link>
          <img className="logo_mobile" src="/img/hamburger.png" alt="Logo" />
        </div>
        <div className="menu-div">
          <ul className="menu">
            <NavMenu
              onClick={setActiveTab}
              activeTab={activeTab}
              num={1}
              name={t("portfolio")}
              pathName="/design"
              icon="/img/portfolio.png"
            />
            <NavMenu
              onClick={setActiveTab}
              activeTab={activeTab}
              num={2}
              name={t("repair")}
              pathName="/repair"
              icon="/img/constraction.png"
            />
            <NavMenu
              onClick={setActiveTab}
              activeTab={activeTab}
              num={3}
              name={t("investment")}
              pathName="/investment"
              icon="/img/investment.png"
            />
            <NavMenu
              onClick={setActiveTab}
              activeTab={activeTab}
              num={4}
              name={t("about")}
              pathName="/about"
              icon="/img/about.png"
            />
            <NavMenu
              onClick={setActiveTab}
              activeTab={activeTab}
              num={5}
              name={t("contact")}
              pathName="/contact"
              icon="/img/contact.png"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
