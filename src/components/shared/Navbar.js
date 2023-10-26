import React from "react";
import logo from "../../assets/logo.png";
import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";

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
      <div class="container-fluid container mt-3 mb-3 d-flex justify-content-between ">
        <a class="navbar-brand " href="#id">
          <div>
            <img src={logo} alt="" className={classes.logoImg}></img>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline ">
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="#id">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  HOME
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " aria-current="page" href="#id">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  MUSIC
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " aria-current="page" href="#id">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  EVENTS
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " aria-current="page" href="#id">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  SPORT
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#id">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  CONTACT
                </button>
              </a>
            </li>
          </ul>
          <div>
            <button
              type="button"
              className={`btn btn-lg rounded-pill fw-bold px-4 ${classes["bg-secondaryColor"]}`}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
