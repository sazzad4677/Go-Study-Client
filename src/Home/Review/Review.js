import React, { useEffect, useState } from "react";
import ReviewData from "../ReviewData/ReviewData";
import "./Review.css";
const Review = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-sands-78848.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="review-container">
      <div className="container mt-3 ">
        <h2 className="text-center top-text m-5">
          We have 20k+ students & they share success stories
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {reviews.map((review, key) => (
            <ReviewData review={review} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
