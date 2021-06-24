import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillPhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import logo from "../../../images/reading.svg";
const FooterBottom = () => {
  return (
    <div className="mt-5 ms-5 row footer-bottom" style={{ marginTop: "200px" }}>
      <div className="col-md-3 mb-5">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" height="50px" />
          <span className="footer-icon-text">GoStudy</span>
        </a>
        <p className="text-start m-2 footer-text">
          We support programs that <br /> create advancement <br />{" "}
          opportunities for people.
        </p>
        <div className="m-2 d-flex footer-icon">
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
        <div className="mt-3 footer-text">
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms and Condition</p>
          <p>Student Spotlights</p>
        </div>
      </div>
      <div className="col-md-3">
        <h5 className="footer-head-text">Learning</h5>
        <div className="footer-text mt-3">
          <p>Project Management</p>
          <p>Wordpress Development</p>
          <p>Business Strategy</p>
          <p>Software Development</p>
        </div>
      </div>
      <div className="col-md-3">
        <h5 className="footer-head-text">Contact Us</h5>
        <div className="d-flex mb-2">
          <div className="brand-color">
            <ImLocation />
          </div>
          <div className="ms-2 mb-2 footer-text">
            PO Box 16122 Collins Street West Victoria 8007 Australia
          </div>
        </div>
        <div className="d-flex">
          <div className="brand-color">
            <AiFillPhone />
          </div>
          <div className="ms-2 mb-2 footer-text">+91 458 654 528</div>
        </div>
        <div className="d-flex">
          <div className="brand-color">
            <MdEmail />
          </div>
          <div className="ms-2 mb-2 footer-text">gostudy@mail.com</div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
