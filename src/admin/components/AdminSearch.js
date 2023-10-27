import React from "react";

const AdminSearch = () => {
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
              className='btn btn-secondary rounded-pill position-absolute top-50 end-0 translate-middle-y p-3 px-4 me-2 fw-semibold '
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

          <div
            class="modal fade"
            id="addNew"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    New message
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Recipient:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Message:
                      </label>
                      <textarea
                        class="form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSearch;
