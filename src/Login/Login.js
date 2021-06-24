import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../App";
import google from "../images/google.svg";
import CopyRight from "../Shared/Footer/CopyRight/CopyRight";
import FooterBottom from "../Shared/Footer/FooterBottom/FooterBottom";
import Navbar from "../Shared/Navbar/Navbar";
import { firebaseConfig } from "./firebase.config";
import "./Login.css";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    admin:null,
    teacher:null
  });
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const createdUser = { ...user };
        createdUser.isLoggedIn = true;
        createdUser.name = result.user.displayName;
        createdUser.userEmail = result.user.email;
        createdUser.photoURL = result.user.photoURL
        setUser(createdUser);
        setLoggedIn(createdUser);
        updateUserName(result.user.displayName);
        storeAuth();
        history.replace(from);
      })
      .catch((error) => {
        const createdUser = { ...user };
        createdUser.isLoggedIn = false;
        createdUser.error = error.message;
        setUser(createdUser);
        setLoggedIn(createdUser);
        
      });
  };
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    });
  };
  const storeAuth = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token', idToken);
    }).catch(function(error) {
      // Handle error
    });
  }
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="container login d-flex flex-column justify-content-center mt-5 login-form">
          <h4 className="text-center brand-text fw-bold">Login</h4>
          <button
            className="btn google-login mt-3 position-relative"
            onClick={googleSignIn}
          >
            <span className="position-absolute top-0 start-0 ms-2 mt-1">
              <img src={google} alt="" height="25" width="25" />
            </span>
            Continue With Google
          </button>
          <p className="text-center mt-2">
            Don't Have an account? <a href="#">Create account</a>
          </p>
        </div>
      </div>
      <div className="mt-5" style={{backgroundColor:"#101c32", height:"400px"}}>
        <div className="container d-flex flex-column align-items-center">
          <FooterBottom />
          <CopyRight />
        </div>
    </div>
    </section>
  );
};

export default Login;
