import React from 'react'

export default function daytime() {
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

    let sunset24h = convertTime12to24h(`${result.forecast.forecastday[0].astro.sunset}`);
    let sunset24m = convertTime12to24m(`${result.forecast.forecastday[0].astro.sunset}`);
    let sunrise24h = convertTime12to24h(`${result.forecast.forecastday[0].astro.sunrise}`);
    let sunrise24m = convertTime12to24m(`${result.forecast.forecastday[0].astro.sunrise}`);
    let sunsettime = new Date(null, null, null, sunset24h, sunset24m);
    let sunrisetime = new Date(null, null, null, sunrise24h, sunrise24m);


    
    var now = new Date();
    if (now.getHours() > sunrisetime.getHours() && now.getHours() < sunsettime.getHours()) {
        let dayimg = document.querySelector('.day')
        dayimg.src = "./images/graphicday.png"
        document.body.className += "day";
    } else {
        let nightimg = document.querySelector('.day')
        nightimg.src = "./images/graphicnight.png"
        document.body.className += "night";
    }



    let delta = Math.abs(sunrisetime - sunsettime) / 1000;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    let daytimeT =`${hours}h ${minutes}m`
    console.log(daytimeT)
  return (
    <div>daytime</div>
  )
}
