import React from "react";

export default function CityItem({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        textAnchor: "none",
        color: "#444444",
        textDecoration: "none",
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "400",
        letterSpacing: "-0.05em",
      }}
    >
      {name}
    </div>
  );
}
