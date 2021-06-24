import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import Navbar from "../../Shared/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddReview = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [inputData, setInputData] = useState({
    title: "",
    review: "",
    name: loggedIn.name,
    email: loggedIn.userEmail,
    photo: loggedIn.photoURL,
  });
  const [success, setSuccess] = useState({});
  const getData = (e) => {
    const data = { ...inputData };
    data[e.target.name] = e.target.value;
    setInputData(data);
    console.log(data);
  };
  const handelSubmit = (e) => {
    fetch("https://murmuring-sands-78848.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(data);
      });
    e.preventDefault();
  };
  return (
    <div
      style={{
        backgroundColor: "#F4F7FC",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <h3 className="text-center mt-5">Add Review</h3>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>

        <div className="col-md-8 ms-5 p-5" style={{ backgroundColor: "white" }}>
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label className="form-label">Review Title</label>
              <input
                name="title"
                type="text"
                className="form-control"
                onChange={getData}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Write a Review
              </label>
              <textarea
                name="review"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={getData}
              ></textarea>
              <button type="submit" className="btn brand-btn mt-2">
                Submit
              </button>
              {success.length > 0 && <p>Your review has been submitted</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
