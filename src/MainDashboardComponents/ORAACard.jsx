import React from "react";
import "./ORAACard.css";
import ORAAImg from "../assets/ORAAImg.png";

export default function ORAACard({ onClick = () => {} }) {
  return (
    <div className="oraa-card" onClick={onClick}>
      <div className="oraa-card__icon-wrapper">
        <img src={ORAAImg} alt="Online Registration icon" />
      </div>
      <h2 className="oraa-card__title">
        ORAA
      </h2>
      <p className="oraa-card__subtitle">Register Now</p>
    </div>
  );
}
