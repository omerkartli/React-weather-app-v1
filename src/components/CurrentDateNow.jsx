import React from 'react';
import './CurrentDateNow.css';

export default function CurrentDateNow() {
    let date = new Date();
    const dateNow =
        date.toLocaleString("en-US", {
        weekday: "long",
        }) +
        ", " +
        date.toLocaleString("en-US", {
        day: "numeric",
        }) +
        " " +
        date.toLocaleString("en-US", {
        month: "short",
        }) +
        " " +
        date.toLocaleString("en-US", {
        year: "numeric",
        }) +
        " | " +
        date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        });
  return (
    <div className="date">{dateNow}</div>
  )
}
