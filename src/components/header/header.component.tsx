import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import CustomButton from "../button/button.component";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img
            src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
