import React from "react";
import "./DHPCard.css";
import DHPImg from "../assets/DHPImg.png";

export default function DHPCard({ onClick = () => {} }) {
  return (
    <div className="dhp-card" onClick={onClick}>
      <div className="dhp-card__icon-wrapper">
        <img src={DHPImg} alt="B.M. Processing icon" />
      </div>
      <p className="dhp-card__subtitle">Get a Job Conveniently</p>
      <h2 className="dhp-card__title">
        DIRECT-HIRE <br /> PROCESSING
      </h2>
      
    </div>
  );
}
