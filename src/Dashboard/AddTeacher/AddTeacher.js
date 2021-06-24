import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddTeacher = () => {
  const [inputData, setInputData] = useState({});
  const [status, setStatus] = useState(null);
  const [teacherImage,setTeacherImage] = useState(null)

  const getData = (e) => {
    const data = { ...inputData };
    
    data[e.target.name] = e.target.value;
    console.log(data);
    setInputData(data);
  };
  const handelTeacherImage = (e) =>{
    const newFile = e.target.files[0];
    setTeacherImage(newFile);
  }
  const handelSubmit = (e) => {
    const formData = new FormData();
    formData.append('file', teacherImage)
    formData.append('teacherName', inputData.teacherName)
    formData.append('teacherEmail', inputData.teacherEmail)
    fetch('https://murmuring-sands-78848.herokuapp.com/addTeacher', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data =>{
      setStatus(data.msg)
    })
    e.preventDefault()
  }
  return (
    <section
      style={{
        backgroundColor: "#F4F7FC",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <h3 className="ms-5 mt-5">Add Teacher</h3>
          <div className="ms-5 mt-5 p-5">
        <div className="row">
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
                  <label className="brand-text">Teacher's Name</label>
                  <input
                    name="teacherName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Teacher Name"
                    onChange={getData}
                    required
                  />
                </div>
                <div className="form-group col-md-4 mt-3 mb-3">
                  <label className="brand-text">Teacher's Email</label>
                  <input
                    name="teacherEmail"
                    type="email"
                    className="form-control"
                    placeholder="Enter Teacher Name"
                    onChange={getData}
                    required
                  />
                </div>
                <div className="form-group col-md-3 mt-3 mb-3">
                  <label className="brand-text">Upload Teacher Image</label>
                  <input name="image" type="file" className="form-control" onChange={handelTeacherImage} required/>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn mb-3  brand-btn"
                    style={{ width: "10%" }}
                  >
                    Submit
                  </button>
                 <p > {status} </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default AddTeacher;
