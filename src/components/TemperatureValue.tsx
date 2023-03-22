import React from 'react';
import './TemperatureValue.css';

export default function TemperatureValue({currentTemperature}) {
  return (
    <div><div className="temperature">
    <div className="temperature-value">
      {Math.round(currentTemperature)}
    </div>
    <div className="degree-icon">°C</div>
  </div></div>
  )
}
