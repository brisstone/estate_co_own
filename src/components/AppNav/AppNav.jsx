import React, { useState } from "react";
import "./AppNav.scss";
import logo from "../../assets/logo.svg";
import AppButton from "../Button/AppButton";
import { Link } from "react-router-dom";
import BackButton from "../../assets/Vector.svg";
import hamburger from "../../assets/hamburger.svg";

const AppNav = () => {
  const [open, setOpen] = useState();
  return (
    <div className="nav_container">
      <div className="">
        <Link to="/" style={{ color: "#ffffff" }}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="app_nav_wrapper">
        <div className="app__nav nav_navigations">
          <div>
            <Link to="/" style={{ color: "#ffffff" }}>
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" style={{ color: "#ffffff" }}>
              About Us
            </Link>
          </div>
          <div>
            <Link to="/contact" style={{ color: "#ffffff" }}>
              Contact Us
            </Link>
          </div>
          <div>
            <Link to="/blog" style={{ color: "#ffffff" }}>
              Blog
            </Link>
          </div>
          <AppButton
            className="nav_sign_txt"
            style={{ width: "209px", height: "48px", fontSize: "" }}
            onClick={() => (window.location.href = "/signup/0000")}
          >
            Sign Up/Sign In
          </AppButton>
        </div>
      </div>

      <div
        onClick={() => {
          setOpen(true);
        }}
        className="hamburger"
        alt=""
      >
        <img src={hamburger} alt={hamburger} />
      </div>

      <div className={`nav-items ${open ? "open" : ""} `}>
        <div className="nav-item-items"></div>
        <div style={{ marginBottom: "26px" }} alt="">
          <img
            src={BackButton}
            alt={BackButton}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
        <div className="image_div">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="left-side flex-row">
          <div className="menu-items flex-row">
            <div>
              <Link to="/" style={{ color: "#ffffff" }}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" style={{ color: "#ffffff" }}>
                About Us
              </Link>
            </div>
            <div>
              <Link to="/contact" style={{ color: "#ffffff" }}>
                Contact Us
              </Link>
            </div>
            <div>
              <Link to="/blog" style={{ color: "#ffffff" }}>
                Blog
              </Link>
            </div>
            <AppButton
              className="nav_sign_txt app_btn_standard"
              style={{
                height: "48px",
                fontSize: "",
                marginTop: "106px",
              }}
              onClick={() =>
                (window.location.href = "/signup/0000")
              }
            >
              Sign Up/Sign In
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNav;
