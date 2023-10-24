import React from "react";
import classes from "../shared/Filter.module.css";

const Filter = () => {
  return (
    <section className="container position-absolute top-100 start-50 translate-middle">
      <div
        className={`card border border-0 p-5 shadow-lg p-3 mb-5 rounded ${classes["bg-mainColor"]}`}
      >
        <div class="card-header">
          <p className={`fs-5 fw-bold pt-3 ${classes.secondaryColor}`}>
            FIND YOUR OWN EVENTS NOW{" "}
          </p>
        </div>
        <div class="card-body p-0">
          <blockquote class="blockquote mb-0 mt-4">
            <div class={`card border border-0 ${classes["bg-mainLightColor"]}`}>
              <div class="card-body">
                <div class="container text-center">
                  <div class="row justify-content-between d-flex align-items-center gap-4">
                    <div class="col-4 mt-3 ">
                      <div class="input-group mb-3 ">
                        <span
                          class="input-group-text bg-secondary"
                          id="basic-addon1"
                        >
                          <i class="fa-solid fa-magnifying-glass "></i>
                        </span>
                        <input
                          type="text"
                          class={`form-control ${classes["bg-mainLightColor"]}`}
                          placeholder="Search for events..."
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div class="col-7 ">
                      <div className="d-flex justify-content-end gap-4">
                        <div className="d-flex  gap-2">
                          <i class="fa-solid fa-film fa-xl mt-3"></i>
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
                        <div className="d-flex gap-2">
                          <i class="fa-solid fa-city fa-xl mt-3"></i>
                          <select
                            class="form-select me-2 bg-secondary"
                            aria-label="Default select example"
                          >
                            <option selected>City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="d-flex gap-2">
                          <i class="fa-solid fa-calendar-days fa-xl mt-3"></i>
                          <select
                            class="form-select bg-secondary"
                            aria-label="Default select example"
                          >
                            <option selected>Date</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
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
