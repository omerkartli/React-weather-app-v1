import React from 'react'
import Indexandsearch from './Indexandsearch'

export default function DayNightImage() {
  return (
    <div>
        {(Indexandsearch.now.getHours() > Indexandsearch.getDayTimeRise(Indexandsearch.result.forecast.forecastday[0].astro.sunrise)
            && Indexandsearch.now.getHours() < Indexandsearch.getDayTimeSet(Indexandsearch.result.forecast.forecastday[0].astro.sunset)) ? (
            <img className="day" src={Indexandsearch.graphicDay} alt="dayimage" />
        ) :
            <img className="day" src={Indexandsearch.graphicNight} alt="dayimage" />
        }
    </div>
  )
}
