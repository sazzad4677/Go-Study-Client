import React from "react";
// import demoPartner1 from "../../images/demo-partner-1.png";
// import demoPartner2 from "../../images/demo-partner-2.png";
// import demoPartner3 from "../../images/demo-partner-3.png";
// import demoPartner4 from "../../images/demo-partner-4.png";
import "./Partner.css";
const Partner = () => {
  return (
    <section className="container" style={{ width: "100%", height: "400px" }}>
      <h4 className="text-center mt-5">
        Partnering with world's leading{" "}
        <span style={{ color: "#FF1F59" }}>universities and companies</span>{" "}
      </h4>

      <div className="d-flex justify-content-center mt-5">
        <span className="m-3">
          <img
            src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/logo-1.png"
            alt=""
            height="100px"
            className="me-5"
          />
        </span>
        <span className="m-3">
          <img
            src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/logo-2.png"
            alt=""
            height="100px"
            className="me-5"
          />
        </span>
        <span className="m-3">
          <img
            src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/logo-3.png"
            alt=""
            height="100px"
            className="me-5"
          />
        </span>
        <span className="m-3">
          <img
            src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/logo-4.png"
            alt=""
            height="100px"
            className="me-5"
          />
        </span>
      </div>
    </section>
  );
};

export default Partner;
