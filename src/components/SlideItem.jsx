import React from "react";

export default function SlideItem({image, nextDate, maxMinC}) {
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
      <div className="next-day1">{maxMinC}</div>
    </div>
  );
}
