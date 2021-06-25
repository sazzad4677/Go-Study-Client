import React from "react";
import { ImQuotesRight } from "react-icons/im";
import "./ReviewData.css";
const ReviewData = ({ review }) => {
  return (
    <div className="col-md-4">
      <div className="review mb-5">
        <div className="reviewer-image">
          <img
            className="align-items-top rounded-circle"
            src={review.photo}
            alt=""
            width="150"
            height="150"
          />
        </div>
        <div>
          <p className="text-center review-text">{review.review}</p>
          <div className="reviewer ms-3 d-flex justify-content-between">
            <div>
              <p className="reviewer-name">{review.name}</p>
              <p className="reviewer-degree">React Devs</p>
            </div>
            <div className="quotes">
              <ImQuotesRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewData;
