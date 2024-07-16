import React from "react";
import { Link } from "react-router-dom";

function NavLogo({ icon, className }) {
  return (
    <Link className={className} to="/">
      <img src={icon} alt="Logo" />
    </Link>
  );
}

export default NavLogo;
