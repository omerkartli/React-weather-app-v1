import React, { useEffect, useState } from "react";
import locationicon from "../images/locationicon.svg";
import CityItem from "./CityItem";
import CityItemHeader from "./CityItemHeader";

const CITIES_API =
  "https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text";

export default function Search({ cityName, setcityName, latLon, setLatLon }) {
  const [searchText, setSearchText] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (searchText.length > 2) {
      let qs = `${CITIES_API}=${searchText}`;
      fetch(qs)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            let orderedCities = data.sort((a, b) =>
              a.city > b.city ? 1 : b.city > a.city ? -1 : 0
            );
            setCities(orderedCities);
          }
        });
    } else {
      setCities([]);
    }
  }, [searchText]);

  return (
    <div className="body">
      <div className="app-searchS">
        <div>
          <p className="label-input">Location</p>
        </div>

        <div className="input-box-and-img">
          <div className="input-box">
            <input
              type="text"
              id="search-input"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <div className="input-box-location-icon">
              <img src={locationicon} alt="location icon" />
            </div>
          </div>
        </div>
        <div className="city-and-country" style={{
      height: '100vh',
      overflowY: 'scroll',
      scrollbarWidth: '10px',
    }}>
          <ul id="my-list-output" style={{ marginBottom: "0px" }}>
            {cities.length === 0
              ? "Please enter at least 3 letters to make a search."
              : cities.map((c, cIndex, cArray) => {
                  let char = c.city[0].toUpperCase();

                  if (cIndex > 0) {
                    char = cArray[cIndex - 1].city[0].toUpperCase();
                  }

                  if (char === c.city[0].toUpperCase() && cIndex > 0) {
                    return (
                      <CityItem
                        name={c.city+", "+c.country}
                        onClick={() => setLatLon(c.lat + "," + c.lon)}
                      />
                    );
                  } else {
                    return (
                      <>
                        <CityItemHeader char={c.city[0].toUpperCase()} />
                        <CityItem
                          name={c.city+", "+c.country}
                          onClick={() => setLatLon(c.lat + "," + c.lon)}
                        />
                      </>
                    );
                  }
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}
