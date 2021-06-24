import React from "react";
import { FcCheckmark } from "react-icons/fc";
import headerImage from "../../images/header-main-image.jpg";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <main
      className="main-container "
      style={{ height: "870px", backgroundColor: "#F7F4F4" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="header-text">
              Build Skills with Online Courses from expert instructor
            </h1>
            <p className="header-sub-text mt-5">
              Start streaming on-demand video lectures today from top level
              instructors Attention heatmaps.
            </p>
            <div className="input-group mt-5">
              <div>
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="What do you want to learn?"
                  style={{ width: "300px" }}
                />
              </div>
              <button type="button" className="btn brand-btn">
                search
              </button>
            </div>
            <div className="d-flex mt-5">
              <div className="me-2">
                <span>
                  {" "}
                  <FcCheckmark className="me-2" /> Get Certified
                </span>
              </div>
              <div>
                <span>
                  {" "}
                  <FcCheckmark className="me-2 ms-2" /> Gain Job-ready Skills
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src={headerImage}
              alt=""
              height="500"
              className="header-img img-fluid rounded-circle "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
