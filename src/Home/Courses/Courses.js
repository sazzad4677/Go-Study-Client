import React from "react";
import groupImage1 from "../../images/group-study-1.jpg";
import groupImage2 from "../../images/group-study-2.jpg";
import groupImage3 from "../../images/group-study-3.jpg";
import groupImage4 from "../../images/group-study-4.jpg";
import manImage1 from "../../images/man-Image.jpg";
import CoursesData from "../CoursesData/CoursesData";
import "./Courses.css";

const courseData = [
  {
    image: groupImage1,
    profileImage: manImage1,
    profileName: "Mike",
    title: "Learn React JS Tutorial For Beginners",
    totalEnrolled: "4",
    star: "4",
    price: "59.99",
  },
  {
    image: groupImage2,
    profileImage: manImage1,
    profileName: "Mike",
    title: "Learn React JS Tutorial For Beginners",
    totalEnrolled: "4",
    star: "4",
    price: "59.99",
  },
  {
    image: groupImage3,
    profileImage: manImage1,
    profileName: "Mike",
    title: "Learn React JS Tutorial For Beginners",
    totalEnrolled: "4",
    star: "4",
    price: "59.99",
  },
  {
    image: groupImage4,
    profileImage: manImage1,
    profileName: "Mike",
    title: "Learn React JS Tutorial For Beginners",
    totalEnrolled: "4",
    star: "4",
    price: "59.99",
  },
];

const Courses = () => {
  return (
    <section className="course-container container">
      <h1 className="text-center m-5">Choose From Our Top Courses</h1>
      <div >
        <div className="row">
          {
            courseData.map((course, key)=> 
              <CoursesData course={course} key={key}/>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Courses;
