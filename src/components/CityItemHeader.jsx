import React from "react";

export default function CityItemHeader({ char }) {
  return (
    <div
      style={{
        fontSize: "40px",
        marginBottom: "17px",
        marginTop: "5px",
        color: " #AAAAAA",
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: 300,
        lineHeight: "48px",
        letterSpacing: "-0.5em",
        listStyleType: "none",
      }}
    >
      {char}
    </div>
  );
}
