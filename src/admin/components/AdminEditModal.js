import React from "react";
import { useState } from "react";
const AdminEditModal = (props) => {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");

  const editHandler = () => {
    setEdit(false);
  };
  const saveHandler = () => {
    setEdit(true);
  };

  const changeInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "name") {
      setName(value);
      console.log(value);
    } else if (name === "date") {
      setDate(value);
      console.log(value);
    } else if (name === "location") {
      setLocation(value);
      console.log(value);
    } else if (name === "category") {
      setCategory(value);
      console.log(value);
    } else if (name === "info") {
      setInfo(value);
      console.log(value);
    }
  };
  return (
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
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body row m-4">
            <div className="col-sm-7 col-lg-4 mb-5">
              <img
                src={props.data.imageURLValue}
                alt=""
                className="me-5 img-fluid img-thumbnail"
                style={{ width: "30rem" }}
              />
            </div>
            <div className="col-sm-5 col-lg-4 ">
              <div class="mb-3">
                <input
                  type="text"
                  name="name"
                  id="disabledInput"
                  class="form-control fs-2"
                  placeholder={props.data.nameValue}
                  disabled={edit}
                  onChange={changeInputHandler}
                  value={name}
                />
              </div>

              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  class="form-control "
                  id="recipient-name"
                  value={props.data.dateValue}
                  disabled={edit}
                  onChange={changeInputHandler}
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  class="form-control "
                  id="recipient-name"
                  placeholder={props.data.locationValue}
                  disabled={edit}
                  onChange={changeInputHandler}
                  value={location}
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Category:
                </label>
                <select
                  class="form-select "
                  name="category"
                  aria-label="Default select example"
                  disabled={edit}
                  onChange={changeInputHandler}
                >
                  <option
                    value="Category"
                    selected={props.data.categoryValue === "Category"}
                  >
                    Category
                  </option>
                  <option
                    value="Music"
                    selected={props.data.categoryValue === "Music"}
                  >
                    Music
                  </option>
                  <option
                    value="Events-Art"
                    selected={props.data.categoryValue === "Events-Art"}
                  >
                    Events - Art
                  </option>
                  <option
                    value="Sport"
                    selected={props.data.categoryValue === "Sport"}
                  >
                    Sport
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Short Info about the event:
                </label>
                <textarea
                  name="info"
                  class="form-control"
                  id="message-text"
                  disabled={edit}
                  placeholder={props.data.infoValue}
                  onChange={changeInputHandler}
                ></textarea>
              </div>
              {edit && (
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={editHandler}
                >
                  Edit
                </button>
              )}
              {!edit && (
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={saveHandler}
                >
                  Save
                </button>
              )}
            </div>
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
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditModal;
