import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox({ conditionIcon, conditionText }) {
  return (
    <div>
      <div className="description-and-image">
        <div className="image-icon">
          <img
            width="50px"
            height="50px"
            className="icon-image"
            src={conditionIcon}
            alt="cloudimage"
          />
        </div>
        <div className="description">{conditionText}</div>
      </div>
    </div>
  );
}
