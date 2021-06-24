import axios from "axios";
import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import Navbar from "../../Shared/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddCourse = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [inputData, setInputData] = useState({});
  const [status, setStatus] = useState({});
  const [imageSuccess, setImageSuccess] = useState({});

  const handelImageUpload = (event) => {
    // console.log((event.target.pattern).status);
    const imageData = new FormData();
    imageData.set("key", "4c5b39315115b5add699e93840f098d7");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        if (response.status === 200) {
          inputData.courseImage = response.data.data.display_url;
          setImageSuccess({ status: true, message: "Image Upload Success" });
          setTimeout(() => {
            setImageSuccess({ status: null, message: "" });
          }, 5000);
        } else {
          setImageSuccess({ status: false, message: "Image Upload Failed" });
          setTimeout(() => {
            setImageSuccess({ status: null, message: "" });
          }, 5000);
        }
      })
      .catch(function (error) {
        setImageSuccess({
          status: false,
          message: "Please upload a valid image",
        });
        setTimeout(() => {
          setImageSuccess({ status: null, message: "" });
        }, 5000);
      });
  };
  const getData = (e) => {
    const data = { ...inputData };
    data[e.target.name] = e.target.value;
    console.log(data);
    setInputData(data);
  };
  const handelSubmit = (e) => {
    const courseData = inputData;
    inputData.teacherEmail = loggedIn.userEmail;
    inputData.teacherName = loggedIn.name;
    inputData.teacherPhoto = loggedIn.photoURL;
    fetch("https://murmuring-sands-78848.herokuapp.com/addCourse", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    }).then((response) => {
      if (response.status === 200) {
        setStatus({ status: true, message: "Course Added Successfully" });
        setTimeout(() => {
          setStatus({ status: null, message: "" });
        }, 5000);
      } else {
        setStatus({
          status: false,
          message: "Sorry Something Went Wrong,Please try again",
        });
        setTimeout(() => {
          setStatus({ status: null, message: "" });
        }, 5000);
      }
    });
    e.preventDefault();
  };

  return (
    <section>
      <Navbar />
      <div className="">
        <Sidebar />
      <div className="ms-5 mt-5 col-md-8">
        <div className="d-flex justify-content-end">
          <div
            style={{
              backgroundColor: "white",
              borderColor: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <div className="col-md-12 mt-2 ms-2 position-relative">
              <form className="row" onSubmit={handelSubmit}>
                <div className="form-group col-md-4 mt-3 mb-3">
                  <label className="brand-text">Add Course Title</label>
                  <input
                    name="courseTitle"
                    type="text"
                    className="form-control"
                    placeholder="Enter Course Title"
                    onChange={getData}
                    required
                  />
                </div>
                <div className="form-group col-md-3 mt-3 mb-3">
                  <label className="brand-text">Course Price</label>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    placeholder="Enter Course Price"
                    onChange={getData}
                    required
                  />
                </div>
                <div className="form-group col-md-4 mt-3 mb-3">
                  <label className="brand-text">Upload Course Image</label>
                  <input
                    name="image"
                    type="file"
                    className="form-control"
                    onChange={handelImageUpload}
                    pattern="([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)"
                    title="Upload a valid image file"
                    required
                  />
                </div>
                <p>{imageSuccess.message}</p>
                <div>
                  {imageSuccess.status && (
                    <button
                      type="submit"
                      className="btn mb-3  brand-btn"
                      style={{ width: "10%" }}
                    >
                      Submit
                    </button>
                  )}
                  {<p> {status.message} </p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AddCourse;
