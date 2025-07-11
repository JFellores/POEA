import React from "react";
import "./OFWCardComponent.css";
import OFWImg from "../assets/OFWImg.png";

export default function OFWCardComponent({ onClick = () => {} }) {
  return (
    <div className="ofw-card" onClick={onClick}>
      <div className="ofw-card__icon-wrapper">
        <img src={OFWImg} alt="OFW car" />
      </div>
      <h2 className="ofw-card__title">
        OFW RECORDS
      </h2>
      <p className="ofw-card__subtitle">Check Yours Now</p>
    </div>
  );
}
