import React from "react";
import "./SlideItem.css";
export default function SlideItem({ image, nextDate, maxC, minC }) {
  return (
    <div className="next-day1-stuff">
      <div>
        <img
          height="44px"
          className="icon-image1"
          src={image}
          alt="hava durumu ikonu "
        />
      </div>
      <div className="next-day1">{nextDate} </div>
      <div className="next-day-temp">
        <div className="next-day1">{`${Math.round(maxC)}`}°C↑</div>
        <div className="next-day1">{`${Math.round(minC)}`}°C↓</div>
      </div>
    </div>
  );
}
