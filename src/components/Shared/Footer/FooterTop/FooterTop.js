import React from "react";

const FooterTop = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="row justify-content-center align-items-center footer-topBox"
        style={{}}
      >
        <div className="col-md-4">
          <img
            src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/4151.png"
            alt=""
            width="356"
            height="285"
            className="rounded-circle"
          />
        </div>
        <div className="col-md-6">
          <h2 className="footer-topbox-text">
            Start today and get certified in Fundamentals of digital marketing
          </h2>
          <button className="btn brand-btn mt-2">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
