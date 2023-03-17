import React, { useEffect, useState } from "react";
import graphicNight from "../images/graphicNight.svg";
import graphicDay from "../images/graphicDay.svg";
import humidity from "../images/humidity.svg";
import pressure from "../images/pressure.svg";
import wind from "../images/wind.svg";
import sunrise from "../images/sunrise.svg";
import sunset from "../images/sunset.svg";
import daytime from "../images/daytime.svg";
import Search from "./Search";
import RowItem from "../components/RowItem";
import SlideItem from "../components/SlideItem";
import ImageItem from "../components/ImageItem";
import MaxMinTemp from "../components/MaxMinTemp";
import DescriptionBox from "../components/DescriptionBox";
import TemperatureValue from "../components/TemperatureValue";
import LocationIcon from "../components/LocationIcon";
import CurrentDateNow from "../components/CurrentDateNow";
import SnipperItem from "../components/SnipperItem";

function Indexandsearch() {
  const API_URL = "http://api.weatherapi.com/v1/";
  const key = "3db3b711653346c291170100232402";
  const [result, setResult] = useState({});
  const [cityName, setcityName] = useState("İstanbul");
  const [latLon, setLatLon] = useState("41.01253,29.0808898");
  let date = new Date();

  const getResult = (cityName) => {
    console.log(cityName);
    let query = `${API_URL}forecast.json?q=${cityName}&days=7&key=${key}`;
    fetch(query)
      .then((weather) => weather.json())
      .then((data) => {
        setResult(data);
        setcityName(data.location.name);
      });
  };

  const dates = [];
  for (let i = 0; i < 6; i++) {
    date.setDate(date.getDate() + 1);
    const dateString =
      date.toLocaleString("en-US", {
        weekday: "short",
      }) +
      ", " +
      date.toLocaleString("en-US", {
        day: "numeric",
      });
    dates.push(dateString);
  }
  const [dateNextDay1, dateNextDay2, dateNextDay3, dateNextDay4, dateNextDay5, dateNextDay6] = dates;

  const convertTime12to24h = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}`;
  };

  const convertTime12to24m = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${minutes}`;
  };

  const getDayTime = (sunrisetimeT, sunsettimeT) => {
    let sunset24h = convertTime12to24h(sunsettimeT);
    let sunset24m = convertTime12to24m(sunsettimeT);
    let sunrise24h = convertTime12to24h(sunrisetimeT);
    let sunrise24m = convertTime12to24m(sunrisetimeT);
    let sunsettime = new Date(null, null, null, sunset24h, sunset24m);
    let sunrisetime = new Date(null, null, null, sunrise24h, sunrise24m);
    let delta = Math.abs(sunrisetime - sunsettime) / 1000;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    return `${hours}h ${minutes}m`;
  };

  const getDayTimeRise = (sunrisetimeT) => {
    let sunrise24h = convertTime12to24h(sunrisetimeT);
    let sunrisetime = new Date(null, null, null, sunrise24h, null);
    return `${sunrisetime.getHours()}`;
  };
  const getDayTimeSet = (sunsettimeT) => {
    let sunset24h = convertTime12to24h(sunsettimeT);
    let sunsettime = new Date(null, null, null, sunset24h, null);
    return `${sunsettime.getHours()}`;
  };

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const aaaa = `${position.coords.latitude},${position.coords.longitude}`;
      getResult(aaaa);
    });
  };

  useEffect(() => {
    if (!getResult(latLon)) {
      getLocationJs();
    }
    // eslint-disable-next-line
  }, [latLon]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [latLon]);

  return (
    <div className="outher-class">
      <div>
        {loading ? (
          <SnipperItem/>
        ) : (
          <div>
            {result.current ? (
              date.getHours() >
                getDayTimeRise(result.forecast.forecastday[0].astro.sunrise) &&
              date.getHours() <
                getDayTimeSet(result.forecast.forecastday[0].astro.sunset) ? (
                <ImageItem image={graphicDay} onClick={getLocationJs} />
              ) : (
                <ImageItem image={graphicNight} onClick={getLocationJs} />
              )
            ) : (
              <ImageItem image={graphicDay} onClick={getLocationJs} />
            )}
          </div>
        )}
      </div>
      <div>
        {result.current ? (
          <div className="content4">
            <div className="app">
              <div className="date-and-bar">
                <CurrentDateNow/>
                <input
                  type="text"
                  id="search-bar"
                  value={cityName}
                  onChange={(event) => setcityName(event.target.value)}
                  onKeyDown={getResult}
                  onClick={() => {
                    result.current = false;
                    setcityName("");
                  }}
                />
                <LocationIcon/>
              </div>

              <div className="content">
                <div className="current-condition">
                  <DescriptionBox
                    conditionIcon={result.current.condition.icon}
                    conditionText={result.current.condition.text}
                  />
                  <TemperatureValue
                    currentTemperature={result.current.temp_c}
                  />
                  <MaxMinTemp
                    maxTemp = {result.forecast.forecastday[0].day.maxtemp_c}
                    minTemp = {result.forecast.forecastday[0].day.mintemp_c}    
                  />
                </div>

                <div className="air-condition">
                  <RowItem
                    image={humidity}
                    value={result.current.humidity + "%"}
                    text="Humidity"
                  />
                  <RowItem
                    style={{ marginLeft: "5px" }}
                    image={pressure}
                    value={result.current.pressure_mb + "mBar"}
                    text="Pressure"
                  />
                  <RowItem
                    image={wind}
                    value={result.current.wind_kph + "km/h"}
                    text="Wind"
                  />
                </div>
                
                <div className="sunsetrise-daytime">
                  <RowItem
                    image={sunrise}
                    value={result.forecast.forecastday[0].astro.sunrise}
                    text="Sunrise"
                  />
                  <RowItem
                    image={sunset}
                    value={result.forecast.forecastday[0].astro.sunset}
                    text="Sunset"
                  />
                  <RowItem
                    image={daytime}
                    value={getDayTime(
                      result.forecast.forecastday[0].astro.sunset,
                      result.forecast.forecastday[0].astro.sunrise
                    )}
                    text="Daytime"
                  />
                </div>

                <div className="slider-class">
                  <SlideItem
                    image={result.forecast.forecastday[1].day.condition.icon}
                    nextDate={dateNextDay1}
                    maxC={result.forecast.forecastday[1].day.maxtemp_c}
                    minC={result.forecast.forecastday[1].day.mintemp_c}
                  />
                  <SlideItem
                    image={result.forecast.forecastday[2].day.condition.icon}
                    nextDate={dateNextDay2}
                    maxC={result.forecast.forecastday[2].day.maxtemp_c}
                    minC={result.forecast.forecastday[2].day.mintemp_c}
                  />
                  {/* <SlideItem
                    image={result.forecast.forecastday[3].day.condition.icon}
                    nextDate={dateNextDay3}
                    maxC={result.forecast.forecastday[3].day.maxtemp_c}
                    minC={result.forecast.forecastday[3].day.mintemp_c}
                  />
                  <SlideItem
                    image={result.forecast.forecastday[4].day.condition.icon}
                    nextDate={dateNextDay4}
                    maxC={result.forecast.forecastday[4].day.maxtemp_c}
                    minC={result.forecast.forecastday[4].day.mintemp_c}
                  />
                  <SlideItem
                    image={result.forecast.forecastday[5].day.condition.icon}
                    nextDate={dateNextDay5}
                    maxC={result.forecast.forecastday[5].day.maxtemp_c}
                    minC={result.forecast.forecastday[5].day.mintemp_c}
                  />
                  <SlideItem
                    image={result.forecast.forecastday[6].day.condition.icon}
                    nextDate={dateNextDay6}
                    maxC={result.forecast.forecastday[6].day.maxtemp_c}
                    minC={result.forecast.forecastday[6].day.mintemp_c}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="search-page">
            <Search
              setcityName={setcityName}
              cityName={cityName}
              latLon={latLon}
              setLatLon={setLatLon}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Indexandsearch;
