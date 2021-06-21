import React from "react";
import logo from "../../images/reading.svg";
const Navbar = () => {
  return (
    <nav className=" container navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
       <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt=""
            height="50px"
          />
         <span className="brand-icon-text">GoStudy</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active brand-text me-3" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active brand-text me-3" aria-current="page" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active brand-text me-3" aria-current="page" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active brand-text me-3" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <p className="brand-text mt-2 me-3" aria-current="page" href="#">
                |
              </p>
            </li>
            <li className="nav-item">
              <a className="nav-link active brand-text me-3" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button className="btn brand-btn">
                  Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
