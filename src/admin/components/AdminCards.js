import React from "react";
import "./Admin.css";

const AdminCards = () => {
  return (
    <div className="container mt-5">
      <div class="card border-0 bg-mainLightColor p-3">
        <div class="card-header ">
          <ul class="nav nav-tabs card-header-tabs px-3 pt-3">
            <li class="nav-item">
              <a
                class="nav-link active bg-secondary"
                aria-current="true"
                href="#id"
              >
                All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#id">
                Music
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#id">
                Events - Art
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#id">
                Sport
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="card bg-secondary" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/300"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Event Name</h5>

              <button
                type="button"
                class="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#viewMore"
              >
                View More
              </button>

              <div
                class="modal fade"
                id="viewMore"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
