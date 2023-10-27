import React from "react";
import logo from "../../assets/logo.png";
import "./Admin.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar pt-3 pb-3 bg-mainLightColor">
      <div className="container">
        <a className="navbar-brand" href="#id">
          <img src={logo} alt="Bootstrap" width="300" height="auto" />
        </a>

        <button
          type="button"
          class="btn btn-lg btn-secondary border-0 rounded-pill p-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div className="d-flex align-items-center justify-content-between gap-3 ">
            <i class="fa-solid fa-circle-user fa-2xl"></i>
            <h5 className="fw-normal">UserName</h5>
          </div>
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  UserName
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body fw-normal fst-italic">
                If you are finished making changes to the website, you can log
                out :){" "}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-danger">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
