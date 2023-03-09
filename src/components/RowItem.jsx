import React from "react";

export default function RowItem({ image, value, text }) {
  return (
    <div className="humidity-stuff">
      <div className="humidity-image">
        <img width="24px" height="24px" src={image} alt="humudity part" />
      </div>
      <div className="humidity">{value}</div>
      <div className="humidity-text">{text}</div>
    </div>
  );
}
