import React, { useEffect, useState } from "react";
import CoursesData from "../CoursesData/CoursesData";
import "./Courses.css";


const Courses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('https://murmuring-sands-78848.herokuapp.com/courses')
    .then((res) => res.json())
    .then((data) =>setCourses(data))
  },[])
  return (
    <section id="courses" className="course-container container">
      <h1 className="text-center m-5">Choose From Our Top Courses</h1>
      <div >

        <div className="row">
          {
            courses.map((course, key)=> 
              <CoursesData course={course} key={key}/>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Courses;
