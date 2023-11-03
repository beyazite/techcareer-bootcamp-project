import React from "react";
import "./Admin.css";
import AdminEditModal from "./AdminEditModal";

const AdminCards = (props) => {


  const data = props.sendData;
  
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
              src={data.imageURLValue}
              class="card-img-top"
              alt=""
              style={{ height: "18rem" }}
            />
            <div class="card-body">
              <h5 class="card-title">{data.nameValue}</h5>
              <button
                type="button"
                class="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#viewMore"
              >
                View More
              </button>

              <AdminEditModal data={data}></AdminEditModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
