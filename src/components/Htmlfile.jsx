import React, { useEffect, useState } from 'react';
import graphicNight from '../images/graphicNight.svg';
import graphicDay from '../images/graphicDay.svg';
import locationiconblue from "../images/locationiconblue.svg";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import humidity from '../images/humidity.svg';
import pressure from '../images/pressure.svg';
import wind from '../images/wind.svg';
import sunrise from '../images/sunrise.svg';
import sunset from '../images/sunset.svg';
import daytime from '../images/daytime.svg';


function Htmlfile() {

    const API_URL = 'http://api.weatherapi.com/v1/';
    const key ='3db3b711653346c291170100232402';
    const [result,setResult] = useState({});
    const [cityName, setcityName] = useState('istanbul');
    let now = new Date();

    const getResult = ()=> {
        let query = `${API_URL}forecast.json?q=${cityName}&days=7&key=${key}`
        console.log(query)
            fetch(query)
                .then(weather => weather.json())
                .then(
                    data => {
                        setResult(data)  
                    }
                )
    }
    useEffect(() => {
        cityName && getResult(cityName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cityName])
    console.log( cityName)

    let date = new Date();
    const dateNow = date.toLocaleString('en-US', {
        weekday: 'long'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + ' ' + date.toLocaleString('en-US', {
        month: 'short'
    }) + ' ' + date.toLocaleString('en-US', {
        year: 'numeric'
    }) + ' | ' + date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    })
    console.log(dateNow)

    date.setDate(date.getDate() + 1)
    const dateNextDay1 = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    })

    date.setDate(date.getDate() + 1)
    const dateNextDay2 = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    })

    date.setDate(date.getDate() + 1)
    const dateNextDay3 = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    })

    date.setDate(date.getDate() + 1)
    const dateNextDay4 = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    })

    date.setDate(date.getDate() + 1)
    const dateNextDay5 = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    })

    date.setDate(date.getDate() + 1)
    const dateNextDay6 = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    })
     ///////-----------DayTime----------------////////////
     const convertTime12to24h = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}`;
    }
    
    const convertTime12to24m = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${minutes}`;
    }

    const getDayTime = (sunrisetimeT, sunsettimeT) => {
    let sunset24h = convertTime12to24h(sunsettimeT);
    let sunset24m = convertTime12to24m(sunsettimeT);
    let sunrise24h = convertTime12to24h(sunrisetimeT)
    let sunrise24m = convertTime12to24m(sunrisetimeT);
    let sunsettime = new Date(null, null, null, sunset24h, sunset24m);
    let sunrisetime = new Date(null, null, null, sunrise24h, sunrise24m);
    let delta = Math.abs(sunrisetime - sunsettime) / 1000;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    return `${hours}h ${minutes}m`
    }
     ///////-----------DayTime----------------////////////
     const getDayTimeRise = (sunrisetimeT) => {
        let sunrise24h = convertTime12to24h(sunrisetimeT)
        let sunrisetime = new Date(null, null, null, sunrise24h, null);
        console.log(sunrisetime)
        return `${sunrisetime.getHours()}`
        }
     const getDayTimeSet = ( sunsettimeT) => {
        let sunset24h = convertTime12to24h(sunsettimeT);
        let sunsettime = new Date(null, null, null, sunset24h, null);
        console.log(sunsettime)
        return `${sunsettime.getHours()}`
        }

    return (
        <div className='outher-class'>
            <div>
                { result.current ? (
                    <div>
                    {(now.getHours() > getDayTimeRise(result.forecast.forecastday[0].astro.sunrise)
                        && now.getHours() < getDayTimeSet(result.forecast.forecastday[0].astro.sunset)) ? (
                            <img className="day" src={graphicDay} alt="dayimage"/>   
                        ): 
                            <img className="day" src={graphicNight} alt="dayimage"/>     
                        }
                    </div>
                ): (
                    <div>
                        <p>buraya diğer sayfayı giircez abi alttan yukarı çıkanı </p>
                    </div>) }
                

                <div className="app">
                <div className="date-and-bar">
                    <div className="date">{dateNow}</div>  
                    <input type="text" id="search-bar" value={cityName} 
                    onChange = {event => setcityName(event.target.value)} 
                    onKeyDown={getResult} />
                    <div className="input-box-location-icon-blue">
                        <img src={locationiconblue} alt="location icon" height="12px"/>
                    </div> 
                </div>
                {!result.current ? (
                    <div>
                        <p>buraya diğer sayfayı giircez abi alttan yukarı çıkanı </p>
                    </div>
                ): (
                        <div className="content">
                            <div className="row2">
                                <div className="description-and-image">
                                    <div className="image-icon"> 
                                        <img width="50px" height="50px" className="icon-image" src={result.current.condition.icon}  alt="cloudimage"/> 
                                    </div>
                                    <div className="description">{result.current.condition.text}</div>
                                </div>
                                <div className="temperature">
                                    <div className="temperature-value" >{Math.round(result.current.temp_c)}</div>
                                    <div className="degree-icon">°C</div> 
                                </div>
                                <div className="max-and-min">
                                    <div className="max-and-up-array">
                                        <div className="max-temperature">{Math.round(result.forecast.forecastday[0].day.maxtemp_c)}°C</div>
                                        <div className="up-array">< FiArrowUp/> </div>
                                    </div>
                                    <div className="min-and-down-array">
                                        <div className="min-temperature">{Math.round(result.forecast.forecastday[0].day.mintemp_c)}°C</div>
                                        <div className="down-array">< FiArrowDown/> </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row3">
                                <div className="humidity-stuff">
                                    <div className="humidity-image" >
                                        <img width="24px" height="24px" src={humidity} alt="humudity part"/> 
                                    </div>
                                    <div className="humidity">{result.current.humidity}%</div> 
                                    <div className="humidity-text" >Humidity</div>
                                </div>
                                <div className="pressure-stuff" style={{marginLeft:"5px"}}>
                                    <div className="pressure-image"><img width="24px" height="24px" src={pressure}alt="pressure part"/></div>
                                    <div className="pressure">{result.current.pressure_mb}mBar</div>
                                    <div className="pressure-text">Pressure</div>
                                </div>
                                <div className="wind-stuff">
                                    <div className="wind-image"><img width="24px" height="24px" src={wind}alt="wind part"/></div>
                                    <div className="wind">{result.current.wind_kph}km/h</div>
                                    <div className="wind-text">Wind</div>
                                </div> 
                            </div>

                            <div className="row4">
                                <div className="sunrise-stuff">
                                    <div className="sunrise-image"><img width="24px" height="24px" src={sunrise} alt="gundogumu foti"/></div>
                                    <div className="sunrise">{result.forecast.forecastday[0].astro.sunrise}</div>
                                    <div className="sunrise-text">Sunrise</div>
                                </div>
                                <div className="sunset-stuff" style={{marginLeft:"-10px"}}>
                                    <div className="sunset-image"><img width="24px" height="24px" src={sunset} alt="gunbatimi foti"/></div>
                                    <div className="sunset">{result.forecast.forecastday[0].astro.sunset}</div>
                                    <div className="sunset-text">Sunset</div>
                                </div>
                                <div className="daytime-stuff">
                                    <div className="daytime-image"><img width="24px" height="24px" src={daytime} alt="gunuzunlugu foti"/></div>
                                    <div className="daytime">{getDayTime(result.forecast.forecastday[0].astro.sunset, result.forecast.forecastday[0].astro.sunrise)}</div>
                                    <div className="daytime-text">Daytime</div>
                                </div>
                            </div>

                            <div className="row5">
                                <div className="next-day1-stuff">
                                    <div> <img height="44px" className="icon-image1" src={(result.forecast.forecastday[1].day.condition.icon)} alt="hava durumu ikonu "/> </div>
                                    <div className="next-day1">{dateNextDay1} </div>
                                    <div className="next-day1">{`\n ${Math.round(result.forecast.forecastday[1].day.maxtemp_c)}°C↑` +
                                        `   ${Math.round(result.forecast.forecastday[1].day.mintemp_c)}°C↓`}</div>
                                </div>
                                <div className="next-day2-stuff">
                                    <div> <img height="44px" className="icon-image2" src={result.forecast.forecastday[2].day.condition.icon} alt="hava durumu ikonu " /> </div>
                                    <div className="next-day2">{dateNextDay2} </div>
                                    <div className="next-day2">{`\n ${Math.round(result.forecast.forecastday[2].day.maxtemp_c)}°C↑` +
                                        `   ${Math.round(result.forecast.forecastday[2].day.mintemp_c)}°C↓`}</div>
                                </div>
                                <div className="next-day3-stuff">
                                    <div> <img height="44px" className="icon-image3" src={result.forecast.forecastday[3].day.condition.icon} alt="hava durumu ikonu " /> </div>
                                    <div className="next-day3">{dateNextDay3} </div>
                                    <div className="next-day3">{`\n ${Math.round(result.forecast.forecastday[3].day.maxtemp_c)}°C↑` +
                                        `   ${Math.round(result.forecast.forecastday[3].day.mintemp_c)}°C↓`}</div>
                                </div>
                                <div className="next-day4-stuff">
                                    <div> <img height="40px" className="icon-image4" src={result.forecast.forecastday[4].day.condition.icon} alt="hava durumu ikonu " /> </div>
                                    <div className="next-day4">{dateNextDay4} </div>
                                    <div className="next-day4">{`\n ${Math.round(result.forecast.forecastday[4].day.maxtemp_c)}°C↑` +
                                        `   ${Math.round(result.forecast.forecastday[4].day.mintemp_c)}°C↓`}</div>
                                </div>
                                <div className="next-day5-stuff">
                                    <div> <img height="40px" className="icon-image5" src={result.forecast.forecastday[5].day.condition.icon} alt="hava durumu ikonu " /> </div>
                                    <div className="next-day5">{dateNextDay5} </div>
                                    <div className="next-day5">{`\n ${Math.round(result.forecast.forecastday[5].day.maxtemp_c)}°C↑` +
                                        `   ${Math.round(result.forecast.forecastday[5].day.mintemp_c)}°C↓`}</div>
                                </div>
                                <div className="next-day6-stuff">
                                    <div> <img height="40px" className="icon-image6" src={result.forecast.forecastday[6].day.condition.icon} alt="hava durumu ikonu " /> </div>
                                    <div className="next-day6">{dateNextDay6} </div>
                                    <div className="next-day6">{`\n ${Math.round(result.forecast.forecastday[6].day.maxtemp_c)}°C↑` +
                                        `   ${Math.round(result.forecast.forecastday[6].day.mintemp_c)}°C↓`}</div>
                                </div> 
                            </div>
                        </div>  
                    ) }
                </div>
            </div>
        </div>
    ) }

export default Htmlfile