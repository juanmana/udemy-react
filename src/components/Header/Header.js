import React from "react";
import "./Header.scss";
import NoteLogo from "../../assets/img/LogoSample_ByTailorBrands.jpg";

const Header = () => {
  return <div className="header">



      <img src={NoteLogo} alt="NoteLogo"/>
      <h1>Notes Simulator</h1>
  </div>;
};

export default Header;
