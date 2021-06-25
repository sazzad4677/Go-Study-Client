import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../images/reading.svg";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  return (
    <nav className=" container navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand" href="#">
          <img src={logo} alt="" height="50px" />
          <span className="brand-icon-text">GoStudy</span>
        </Link>
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
              <Link
                to="/home"
                className="nav-link active brand-text me-3"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active brand-text me-3"
                aria-current="page"
                href="#courses"
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link active brand-text me-3"
                aria-current="page"
                href="#"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active brand-text me-3"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <p className="brand-text mt-2 me-3">|</p>
            </li>
            <li className="nav-item">
              {loggedIn.isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="nav-link active brand-text me-3"
                  aria-current="page"
                  href="#"
                >
                  {loggedIn.name}
                </Link>
              ) : (
                <Link to="/login" className="nav-link active brand-text me-3">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!loggedIn.isLoggedIn && (
                <button className="btn brand-btn">Join Now</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
