import React from "react";
import { ImQuotesRight } from "react-icons/im";
import "./ReviewData.css";
const ReviewData = () => {
  return (
    <div className="col-md-3 review mb-5">
      <div className="reviewer-image">
        <img
          className="align-items-top rounded-circle"
          src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/T932-150x150.jpg"
          alt=""
          width="150"
          height="150"
        />
      </div>
      <div>
        <p className="text-center review-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          magni et sunt magnam, quo repudiandae?
        </p>
        <div className="reviewer ms-3 mb-4 d-flex justify-content-between">
          <div>
            <p className="reviewer-name">Leo Maria</p>
            <p className="reviewer-degree">Student Maths</p>
          </div>
          <div className="quotes">
          <ImQuotesRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewData;
