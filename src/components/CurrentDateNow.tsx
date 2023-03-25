import React from 'react';
import './CurrentDateNow.css';

export default function CurrentDateNow({newLocationTime}) {
    let date1 = new Date();
    console.log(date1)
    let date = date1.toLocaleString('en-US', { timeZone: `${newLocationTime}` })
    console.log(date)

    const convertTimeDateToTime = (time12h:string) => {
      
      let [tarih, zaman] = time12h.split(", ");
      let [haur, min] = zaman.split(":")
      let [sa, pmam] = zaman.split(" ")
      console.log(tarih)
      console.log(sa)
      return `${haur}:${min} ${pmam}`;
    };

    const dateNow =
        date1.toLocaleString("en-US", {
        weekday: "long",
        }) +
        ", " +
        date1.toLocaleString("en-US", {
        day: "numeric",
        }) +
        " " +
        date1.toLocaleString("en-US", {
        month: "short",
        }) +
        " " +
        date1.toLocaleString("en-US", {
        year: "numeric",
        }) +
        " | " +
        convertTimeDateToTime(date);
  return (
    <div className="date">{dateNow}</div>
  )
}
