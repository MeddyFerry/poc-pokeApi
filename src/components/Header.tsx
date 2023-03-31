import React from "react";
import logo from "/Users/meddyferry/Desktop/projets/api/src/assets/logo.png";

function Header() {
  return (
    <div
      className="flex flex-col justify-center items-center content-center"
      style={{ transform: "scale(0.5)" }}
    >
      <img src={logo} alt="My Image" />
    </div>
  );
}

export default Header;
