import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Navbar from "../../Shared/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://murmuring-sands-78848.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  };

  const deleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch("https://murmuring-sands-78848.herokuapp.com/deleteCourse/" + id, {
        method: "DELETE",
        headers: {
          "content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => getData());
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#F4F7FC",
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar />
      <h3 className="text-center mt-5">Manage Product</h3>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>

        <div className="col-md-8 ms-5 p-5" style={{ backgroundColor: "white" }}>
          <table className="table table-borderless text-center">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Course Name</th>
                <th scope="col">Course Price</th>
                <th scope="col">Manage</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.courseTitle}</td>
                  <td>${course.price}</td>
                  <td>
                    <AiFillDelete
                      onClick={() => {
                        deleteCourse(course._id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
