// SIDE BAR'S LIST AND LINKS

import React from "react";
import { Link } from "react-router-dom";

function NavMenu({ num, activeTab, name, pathName, onClick, icon }) {
  return (
    <li>
      <img className="menu_icon" src={icon} alt="" />
      <Link onClick={() => onClick(num)} className={activeTab === num ? " a_active" : ""} num={num} to={pathName}>
        {name}
      </Link>
    </li>
  );
}

export default NavMenu;
{
  /* <button
className={activeTab === num ? "tab active" : "tab"}
onClick={() => onClick(num)}
>
Tab {num + 1}
</button> */
}
{
  /* <li>
<img className="menu_icon" src="/img/İCON/constraction.png" alt="" />
<Link num="1" id="repair" to="/repair">
  {t("repair")}
</Link>
</li>
<li>
<img className="menu_icon" src="/img/İCON/investment.png" alt="" />
<Link num="1" id="investment" to="/investment">
  {t("investment")}
</Link>
</li>
<li>
<img className="menu_icon" src="/img/İCON/about.png" alt="" />
<Link num="1" id="about" to="/about" onClick={() => handleChangePage(e, "about")}>
  {t("about")}
</Link>
</li>
<li>
<img className="menu_icon" src="/img/İCON/contact.png" alt="" />
<Link num="1" id="contact" to="/contact">
  {t("contact")}
</Link>
</li> */
}
