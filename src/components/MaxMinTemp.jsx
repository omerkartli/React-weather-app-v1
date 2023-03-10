import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import "./MaxMinTemp.css";

export default function MaxMinTemp({ maxTemp, minTemp }) {
  return (
    <div>
      <div className="max-and-min">
        <div className="max-and-up-array">
          <div className="max-temperature">
            {Math.round(maxTemp)}
            °C
          </div>
          <div className="up-array">
            <FiArrowUp />
          </div>
        </div>
        <div className="min-and-down-array">
          <div className="min-temperature">
            {Math.round(minTemp)}
            °C
          </div>
          <div className="down-array">
            <FiArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
