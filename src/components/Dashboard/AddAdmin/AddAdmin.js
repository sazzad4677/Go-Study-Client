import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const [inputData, setInputData] = useState({});
  const [status, setStatus] = useState(null);

  const getData = (e) => {
    const data = { ...inputData };
    data[e.target.name] = e.target.value;
    setInputData(data);
  };

  const handelSubmit = (e) => {
    const formData = new FormData();
    formData.append("adminName", inputData.adminName);
    formData.append("adminEmail", inputData.adminEmail);
    fetch("https://murmuring-sands-78848.herokuapp.com/addAdmin", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.msg);
      });
    e.preventDefault();
  };
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
          <h3 className="ms-5 mt-5">Add Admin</h3>
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
                      <label className="brand-text">Admin Name</label>
                      <input
                        name="adminName"
                        type="text"
                        className="form-control"
                        placeholder="Enter Admin Name"
                        onChange={getData}
                        required
                      />
                    </div>
                    <div className="form-group col-md-4 mt-3 mb-3">
                      <label className="brand-text">Admin's Email</label>
                      <input
                        name="adminEmail"
                        type="email"
                        className="form-control"
                        placeholder="Enter Admin Name"
                        onChange={getData}
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn mb-3  brand-btn"
                        style={{ width: "10%" }}
                      >
                        Submit
                      </button>
                      <p> {status} </p>
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

export default AddAdmin;
