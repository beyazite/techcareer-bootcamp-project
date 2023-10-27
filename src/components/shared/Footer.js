import React from "react";
import logo from "../../assets/logo.png";
import classes from "./Footer.module.css";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer>
      <Subscribe></Subscribe>
      <div
        className={`card border-0   ${classes["bg-mainColor"]}`}
        style={{ paddingTop: "150px" }}
      >
        <div className="container p-4 ">
          <div className="card-header p-4 d-flex justify-content-between">
            <div>
              <img src={logo} alt="" className={classes.logoImg}></img>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-4">
              <span
                className="border rounded-circle p-2 d-flex justify-content-center align-items-center"
                style={{ width: "40px ", height: "40px" }}
              >
                <i className="fa-brands fa-facebook-f fa-xl"></i>
              </span>
              <span
                className="border rounded-circle p-2 d-flex justify-content-center align-items-center"
                style={{ width: "40px ", height: "40px" }}
              >
                <i className="fa-brands fa-twitter fa-xl"></i>
              </span>
              <span
                className="border rounded-circle p-2 d-flex justify-content-center align-items-center"
                style={{ width: "40px ", height: "40px" }}
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </span>
              <span
                className="border rounded-circle p-2 d-flex justify-content-center align-items-center"
                style={{ width: "40px ", height: "40px" }}
              >
                <i className="fa-brands fa-pinterest-p fa-xl"></i>
              </span>
            </div>
          </div>

          <div className="card-body ">
            <div className="row mx-auto">
              <div className="col-3 d-flex justify-content-center">
                <div>
                  <h6 className="fw-bold mb-3">WHY EventHarbor ?</h6>
                  <ul
                    className={` list-group p-3 fst-italic  ${classes["bg-mainLightColor"]}`}
                  >
                    <li className="list-item">
                      <i className="fa-regular fa-circle-check fa-lg me-2"></i>
                      Variety{" "}
                    </li>
                    <hr />
                    <li className="list-item">
                      <i className="fa-regular fa-circle-check fa-lg me-2"></i> Easy
                      to Use{" "}
                    </li>
                    <hr />
                    <li className="list-item">
                      <i className="fa-regular fa-circle-check fa-lg me-2"></i>{" "}
                      Current Events
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div>
                  <h6 className="fw-bold mb-3">CONTACT US</h6>
                  <ul
                    className={`list-group  fst-italic p-3 ${classes["bg-mainLightColor"]}`}
                  >
                    <li className="list-item ">
                      Email
                      <div>eventharbor@event.com</div>
                    </li>
                    <hr />
                    <li className="list-item">
                      Phone
                      <div>+90 555 555 55 55</div>{" "}
                    </li>
                    <hr />
                    <li className="list-item">
                      {" "}
                      Location <div>Istanbul , Turkey</div>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-center">
                <div>
                  <h6 className="fw-bold">LEAVE A MESSAGE</h6>
                  <div
                    className={`card border-0 ${classes["bg-mainLightColor"]}`}
                  >
                    <div className="card-body">
                      <form className="bg-transparent">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control bg-transparent"
                                id="firstName"
                                placeholder="Your name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control bg-transparent"
                                id="lastName"
                                placeholder="Your surname"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <input
                            type="tel"
                            className="form-control bg-transparent"
                            id="phoneNumber"
                            placeholder="Your phone number"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control bg-transparent"
                            id="email"
                            placeholder="Your email address"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <textarea
                            className="form-control bg-transparent"
                            id="message"
                            rows="4"
                            placeholder="Your message"
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className={`btn ${classes["bg-secondaryColor"]}`}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <p className="fw-light text-secondary text-center fst-italic">
              Copyright © 2023.All Rights Reserved By EventHarbor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
