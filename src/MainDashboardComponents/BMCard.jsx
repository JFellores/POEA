import React from "react";
import "./BMCard.css";
import BMImg from "../assets/BMImg.png";

export default function BMCard({ onClick = () => {} }) {
  return (
    <div className="bm-card" onClick={onClick}>
      <div className="bm-card__icon-wrapper">
        <img src={BMImg} alt="OFW card" />
      </div>
      <h2 className="bm-card__title">B.M <br/> PROCESSING</h2>
      <p className="bm-card__subtitle">Check Now</p>
    </div>
  );
}
