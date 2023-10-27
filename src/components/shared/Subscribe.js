import React from "react";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div  className="position-relative z-2" style={{height:'25vh'}}>
      <section className='container' style={{width:'850px'}}>
        <div className={classes['bg-mainColor']}></div>
        <div
          className={`card border border-0 p-4 shadow-lg opacity-75 ${classes["bg-mainLightColor"]}`}
        >
          <div className="card-body text-center">
            <h5 className={`fw-bold pb-3 ${classes.secondaryColor}`}>
              SUBSCRIBE NOW
            </h5>
            <h3 className="fw-semibold">TO GET LATEST EVENT INFORMATION </h3>
            <p className="text-secondary fw-normal fst-italic">
              An informational e-mail will be sent to your e-mail address every
              week regarding the events.
            </p>

            <div className="row">
              <div className="col-6 mx-auto">
                <div className="input-group mt-5  position-relative">
                  <input
                    type="text"
                    className="form-control p-4 rounded-pill bg-transparent"
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className={`btn rounded-pill position-absolute top-50 end-0 translate-middle-y p-3 px-4 me-2 fw-semibold ${classes["bg-secondaryColor"]}`}
                    type="button"
                    id="button-addon2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Subscribe;
