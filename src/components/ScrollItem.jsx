import React from "react";

export default function ScrollItem({imageN, nextDateN, maxMinC}) {
  return (
    <div className="next-day1-stuff">
      <div>
        <img
          height="44px"
          className="icon-image1"
          src={imageN}
          alt="hava durumu ikonu "
        />
      </div>
      <div className="next-day1">{nextDateN} </div>
      <div className="next-day1">{maxMinC}</div>
    </div>
  );
}
