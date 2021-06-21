import React from "react";
import "./OffersData.css";

const OffersData = ({ Offers }) => {
  return (
    <div className="d-flex col-md-4 Offers-detail align-items-center justify-content-center">
      <div className="ms-2 p-2">
        <img src={Offers.icon} width="50px" alt="" />
      </div>
      <div className="ms-3 p-2 mt-2">
        <h6 className="fw-bold">{Offers.title}</h6>
        <p>{Offers.description}</p>
      </div>
    </div>
  );
};

export default OffersData;
