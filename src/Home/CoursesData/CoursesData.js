import React from "react";
import { BsPerson, BsStar } from "react-icons/bs";
import "./CourseData.css";

const CoursesData = ({ course }) => {
  return (
    <div className="col-md-3">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div>
          <img src={course.image} className="img-fluid course-image" alt="" />
        </div>
        <div className="mt-2">
          <div className="d-flex ms-3">
            <img
              src={course.profileImage}
              width="40"
              height="40"
              className="rounded-circle me-2"
              alt=""
            />
            <p className="text-secondary ms-2 mt-2">Mike Haris</p>
          </div>
          <div className="course-detail mb-2">
            <h5 className="text-center course-title">{course.title}</h5>
          </div>
          <div className="d-flex justify-content-evenly">
            <span>
              <BsPerson style={{ color: "#ff1f59" }} />{" "}
            </span>
            <span>
              <p>4</p>
            </span>
            <span>
              <BsStar style={{ color: "#ff1f59" }} />
            </span>
            <span>
              <p>4</p>
            </span>
            <span className="price">$55</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesData;
