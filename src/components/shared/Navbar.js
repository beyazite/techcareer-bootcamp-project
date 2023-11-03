import React from "react";
import logo from "../../assets/logo.png";
import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";
import {Link } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? `opacity-75 ${classes["bg-mainLightColor"]}` : ""
      }`}
    >
      <div className="container-fluid container mt-3 mb-3 d-flex justify-content-between ">
        <Link to="/" className="navbar-brand " >
          <div>
            <img src={logo} alt="" className={classes.logoImg}></img>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline ">
            <li className="nav-item">
              <Link to="/"  className="nav-link active " aria-current="page" >
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  HOME
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search-result" className="nav-link  " aria-current="page" >
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  MUSIC
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search-result" className="nav-link  " aria-current="page">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  EVENTS
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search-result" className="nav-link  " aria-current="page">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  SPORT
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#id">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  CONTACT
                </button>
              </a>
            </li>
          </ul>
          <div>
            <Link to="/admin-panel">
            <button
              type="button"
              className={`btn btn-lg rounded-pill fw-bold px-4 ${classes["bg-secondaryColor"]}`}
            >
              LOGIN
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
