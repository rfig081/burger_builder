import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

// const logo = (props) => <img src={burgerLogo} alt="Burger Builder" />;

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger Builder" />
  </div>
);

export default logo;
