import React from "react";
import AdminAddNewEventModal from "./AdminAddNewEventModal";

const AdminSearch = (props) => {

  const dataHandler = (data) =>{
    props.onEventData(data);
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4 rounded-pill bg-transparent"
              placeholder="Write something about events..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              width="200"
            />
            <button
              className="btn btn-secondary rounded-pill position-absolute top-50 end-0 translate-middle-y p-3 px-4 me-2 fw-semibold "
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-4 my-auto d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary rounded-pill p-3 px-4  fw-bolder"
            data-bs-toggle="modal"
            data-bs-target="#addNew"
            data-bs-whatever="@getbootstrap"
          >
            ADD NEW EVENT
          </button>
          <AdminAddNewEventModal onData ={dataHandler}></AdminAddNewEventModal>
        </div>
      </div>
    </div>
  );
};

export default AdminSearch;
