import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>Elite Haven</h4>
          <p>
          Showcase exclusive features like private pools, breathtaking views, 24/7 concierge service, etc.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 8894257767</p>
          <p>tusharsharma12shanu@gmail.com</p>
          <p>© All Rights Reserved By Tushar Sharma</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
