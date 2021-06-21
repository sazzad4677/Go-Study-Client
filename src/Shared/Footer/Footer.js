import React from "react";
// import footerMarketing from "../../images/marketing-footer.jpg";
import { AiFillFacebook, AiFillGithub, AiFillPhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import logo from "../../images/reading.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#101C32", height: "500px" }}>
      <div className="container">
        {/* footer top */}
        <div className="d-flex justify-content-center">
          <div
            className="row justify-content-center align-items-center footer-topBox"
            style={{
              backgroundColor: "#F8FAFF",
              fontWeight: "50px",
              height: "300px",
              width: "100%",
              border: "1px solid #F8FAFF",
              borderRadius: "10px",
            }}
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
              <h2 className="brand-text" style={{ fontSize: "40px" }}>
                Start today and get certified in Fundamentals of digital
                marketing
              </h2>
              <button className="btn brand-btn mt-2">Sign Up Now</button>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="mt-5 ms-5 row" style={{ borderBottom: "1px solid #343E51" }}>
          <div className="col-md-3 mb-5">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" height="50px" />
              <span className="footer-icon-text">GoStudy</span>
            </a>
            <p className="text-start m-2 footer-text-list">
              We support programs that <br /> create advancement <br />{" "}
              opportunities for people.
            </p>
            <div className="m-2 d-flex" style={{ fontSize: "20px" }}>
              <a href="http://github.com" className="m-3">
                <AiFillGithub />
              </a>
              <a href="http://facebook.com" className="m-3">
                <AiFillFacebook />
              </a>
            </div>
          </div>
          <div className="col-md-3 mt-2">
            <h5 className="footer-head-text">Useful Links</h5>
            <p className="mt-3 footer-text-list">
              About Us
            </p>
            <p className="footer-text-list mt-3">
              Privacy Policy
            </p>
            <p className="footer-text-list mt-3">
              Terms and Condition
            </p>
            <p className="footer-text-list mt-3">
              Student Spotlights
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="footer-head-text">Learning</h5>
            <p className="footer-text-list mt-3">
              Project Management
            </p>
            <p className="footer-text-list mt-3">
              Wordpress Development
            </p>
            <p className="footer-text-list mt-3">
              Business Strategy
            </p>
            <p className="footer-text-list mt-3">
              Software Development
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="footer-head-text">Contact Us</h5>
            <div className="d-flex mb-2">
              <div style={{ color: "#FF1F59" }}>
                <ImLocation />
              </div>
              <div className="ms-2 mb-2 footer-text-list">
                PO Box 16122 Collins Street West Victoria 8007 Australia
              </div>
            </div>
            <div className="d-flex">
              <div style={{ color: "#FF1F59" }}>
                <AiFillPhone />
              </div>
              <div className="ms-2 mb-2 footer-text-list">
                +91 458 654 528
              </div>
            </div>
            <div className="d-flex">
              <div style={{ color: "#FF1F59" }}>
                <MdEmail />
              </div>
              <div className="ms-2 mb-2 footer-text-list">
                gostudy@mail.com
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
          <div className="text-center footer-text-list mt-2">
          © Copyright {new Date().getFullYear()} GoStudy All rights reserved.
          </div>
      </div>
    </footer>
  );
};

export default Footer;
