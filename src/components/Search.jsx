import React from 'react'
import locationicon from '../images/locationicon.svg';


export default function Search({ cityName, setcityName, setLanLon}) {
  const API_URL2 = 'https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text'


  function searchWeather() {
    if (cityName.length < 3) return;
    let query = `${API_URL2}=${cityName}`
    console.log(query)
    fetch(query)
      .then(response => response.json())
      .then(displayResult2)
  };
  const displayResult2 = (results) => {
    let result = results.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))
    console.log(results)

    const output = [...result].reduce((acc, curr, i, k) => {
      const idx = acc.findIndex(e => e.alphabet === curr.city[0]);
      if (idx === -1) {
        acc.push({ alphabet: curr.city[0], cities: [`${curr.city}, ${curr.country}`], lat:[curr.lat], lon:[curr.lon] });
      }
      else {
        acc[idx].lat.push(curr.lat)
        acc[idx].lon.push(curr.lon)
        acc[idx].cities.push(`${curr.city}, ${curr.country}`);
        // acc[idx].cities.sort((r1, r2) => r1.city > r2.city ? 1 : -1);
      }
      return acc;
    }, []).sort();
    console.log(output)
    let listL = document.getElementById("my-list-output");
    listL.innerHTML = "";
    for (let i = 0; i < output.length; i++) {
      let alphabet = document.createElement("li");
      alphabet.innerText = output[i].alphabet[0];
      alphabet.style.marginBottom = "17px"
      alphabet.style.marginTop = "5px"
      alphabet.style.fontSize = "40px";
      alphabet.style.color = " #AAAAAA";
      alphabet.style.fontFamily = "Barlow";
      alphabet.style.fontStyle = "normal";
      alphabet.style.fontWeight = 300;
      alphabet.style.fontSize = "40px";
      alphabet.style.lineHeight = "48px";
      alphabet.style.letterSpacing = "-0.5em";
      alphabet.style.listStyleType = "none"
      listL.appendChild(alphabet);
  
      for (let j = 0; j < output[i].cities.length; j++) {
        let citiess = document.createElement("li");
        let link = document.createElement("a");
        const first = output[i].cities[j].split(',')[0]
        console.log(output[i])
        const coords = output[i].lat[j]+ ','+ output[i].lon[j]
        link.setAttribute("href", `index.html?city=${first}&cords=${coords}`)
        link.innerText = output[i].cities[j];
        citiess.appendChild(link)
        citiess.style.marginBottom = "5px"
        citiess.style.listStyleType = "none";
        link.style.textDecoration = "none";
        link.style.textAnchor = "none";
        link.style.color = "#444444"
        citiess.style.textDecoration = "none";
        link.style.fontFamily = 'Barlow';
        link.style.fontStyle = "normal";
        link.style.fontSize = "18px";
        link.style.lineHeight = "22px";
        link.style.fontWeight = "400";
        link.style.letterSpacing = "-0.05em";
        listL.appendChild(citiess)
      }
    }
  }
  return (
    <div className='body'> 
    
    <div className="app-searchS">
        <div>
            <p className="label-input">Location</p>
        </div>

        <div className="input-box-and-img">
            <div className="input-box">
                <input type="text" id="search-input" value={cityName} 
                    onChange = {event => setcityName(event.target.value)}
                    onKeyDown={searchWeather} /> 
                <div className="input-box-location-icon">
                    <img src={locationicon} alt="location icon"/>
                </div>
            </div>
        </div>
        <div className="city-and-country">
            <ul id="my-list-output" style={{marginBottom: "400px"}}> Please enter at least 3 letters to make a search.</ul>          
        </div>
    </div>
    </div>
  )
}
