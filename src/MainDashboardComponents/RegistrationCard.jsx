import React from "react";
import "./RegistrationCard.css";
import ORImg from "../assets/ORImg.png";

export default function RegistrationCard({ onClick = () => {} }) {
  return (
    <div className="registration-card" onClick={onClick}>
      <div className="registration-card__icon-wrapper">
        <img src={ORImg} alt="Registration icon" />
      </div>
      <h2 className="registration-card__title">ONLINE <br/> REGISTRATION</h2>
      <p className="registration-card__subtitle">
        Register Now
      </p>
    </div>
  );
}
