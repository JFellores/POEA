import React from "react";
import "./HelpdeskCard.css";
import HelpdeskIcon from "../assets/HelpdeskIcon.png"; // your headset icon

export default function HelpdeskCard({ onClick = () => {} }) {
  return (
    <div className="helpdesk-card" onClick={onClick}>
      <span className="helpdesk-card__text">DMW ONLINE HELPDESK</span>
      <div className="helpdesk-card__icon">
        <img src={HelpdeskIcon} alt="Helpdesk icon" />
      </div>
    </div>
  );
}
