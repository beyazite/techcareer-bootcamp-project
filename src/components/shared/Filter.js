import React from "react";
import classes from "../shared/Filter.module.css";

const Filter = () => {
  return (
    <section className="container" style={{width:'850px'}}>
      <div
        className={`card border border-0 p-5 shadow-lg p-3 mb-5 rounded ${classes["bg-mainColor"]}`}
      >
        <div className="card-header">
          <p className={`fs-5 fw-bold pt-3 ${classes.secondaryColor}`}>
            FIND YOUR OWN EVENTS NOW
          </p>
        </div>
        <div className="card-body p-0">
          <blockquote className="blockquote mb-0 mt-4">
            <div className={`card border border-0 ${classes["bg-mainLightColor"]}`}>
              <div className="card-body">
                <div className="container text-center">
                      <div className="input-group mb-4 ">
                        <span
                          className="input-group-text bg-secondary"
                          id="basic-addon1"
                        >
                          <i className="fa-solid fa-magnifying-glass "></i>
                        </span>
                        <input
                          type="text"
                          className={`form-control ${classes["bg-mainLightColor"]}`}
                          placeholder="Search for events..."
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                  <div className="row justify-content-between d-flex align-items-center gap-4">
                        <div className="col d-flex gap-2">
                          <i className="fa-solid fa-film fa-xl mt-3"></i>
                          <select
                            class="form-select me-2 bg-secondary"
                            aria-label="Default select example"
                          >
                            <option selected>Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col d-flex gap-2">
                          <i className="fa-solid fa-city fa-xl mt-3"></i>
                          <select
                            className="form-select me-2 bg-secondary"
                            aria-label="Default select example"
                          >
                            <option selected>City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col d-flex gap-2">
                          <i className="fa-solid fa-calendar-days fa-xl mt-3"></i>
                          <input type="date" className="form-control bg-secondary" />
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Filter;
