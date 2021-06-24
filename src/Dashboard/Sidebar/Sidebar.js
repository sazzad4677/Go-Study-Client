import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import "./Sidebar.css";
const Sidebar = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext)
  const logOutUser = () => {
    firebase.auth().signOut().then(() => {
        const logoutUser = { ...loggedIn }
        logoutUser.isLoggedIn = false;
        logoutUser.error = '';
        setLoggedIn(logoutUser);
    }).catch((error) => {
        console.log(error.message);
    });
}
  const [isTeacher,setIsTeacher] = useState(false)
  const [isAdmin,setIsAdmin] = useState(false)
  useEffect(()=>{
    fetch("https://murmuring-sands-78848.herokuapp.com/checkAdmin?email="+loggedIn.userEmail)
    .then(response => response.json())
    .then(data => {
      setIsAdmin(data)
    })
  },[loggedIn.userEmail])

  useEffect(()=>{
    fetch("https://murmuring-sands-78848.herokuapp.com/checkTeacher?email="+loggedIn.userEmail)
    .then(response => response.json())
    .then(data => {
      setIsTeacher(data)
    })
  },[loggedIn.userEmail])

  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 mt-5"
        style={{ height: "600px" }}
      >
        <ul className="list-unstyled text-center">
          <li>
            <span>
              {" "}
              <AiFillDashboard className="mb-1" />
              Dashboard
            </span>
          </li>
          <li>
            <Link to="/home">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <span>Orders</span>
            </Link>
          </li>
          {isTeacher &&
          
              <li>
            <Link to="/addCourse">
              <span> Add Course</span>
            </Link>
          </li>}
          {isAdmin && 
          <li>
            <Link to="/addTeacher">
              <span>Add Teachers</span>
            </Link>
          </li> 
          }
         {isAdmin && 
            <li>
            <Link to="/addAdmin">
              <span>Add Admin</span>
            </Link>
          </li>
         } 
          

          { isTeacher &&
            <li>
            <Link to="/manageCourse">
              <span>Manage Course</span>
            </Link>
          </li>
          }
          <li>
            <Link to="/addReview">
              <span>Add Review</span>
            </Link>
          </li>
          <li>
           <span onClick={logOutUser}>Logout</span>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
