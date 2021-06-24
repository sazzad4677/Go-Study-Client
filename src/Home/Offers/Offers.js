import React from "react";
import OffersBooks from "../../images/offers-book.svg";
import OffersDegree from "../../images/offers-degree.svg";
import OffersTeacher from "../../images/offers-teacher.svg";
import OffersData from "../OffersData/OffersData";
import "./Offers.css";

const offersData = [
  {
    title: "Learn New Skill",
    description: "With flexible courses",
    icon: OffersBooks,
  },
  {
    title: "Expert Teacher",
    description: "Upskill with Speacilist",
    icon: OffersTeacher,
  },
  {
    title: "Online Degrees",
    description: "Study flexibly online",
    icon: OffersDegree,
  },
];

const Offers = () => {
  return (
    <section className="container Offers-container">
      <div className="row mt-2">
        {offersData.map((Offers, key) => (
          <OffersData Offers={Offers} key={key}></OffersData>
        ))}
      </div>
    </section>
  );
};

export default Offers;
