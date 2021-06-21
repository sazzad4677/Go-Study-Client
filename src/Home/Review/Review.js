import React from "react";
import ReviewData from "../ReviewData/ReviewData";
import "./Review.css";
const Review = () => {
  return (
    <section className="review-container">
      <div className="container mt-3 ">
        <h2 className="text-center top-text m-5">
          We have 20k+ students & they share success stories
        </h2>
        <div className="row mt-3">
          <ReviewData />
        </div>
      </div>
    </section>
  );
};

export default Review;
