import React from "react";
import "./PEOSCardComponent.css";
import PEOSicon from "../assets/PEOSicon.png";

export default function PEOSCardComponent({ onClick = () => {} }) {
  return (
    <div className="peos-card" onClick={onClick}>
      <div className="peos-card__icon-wrapper">
        <img src={PEOSicon} alt="PEOS icon" />
      </div>
      <h2 className="peos-card__title">PEOS</h2>
      <p className="peos-card__subtitle">
        Pre-Employment Orientation Seminar
      </p>
    </div>
  );
}
