import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';
//import { Button } from 'react-bootstrap'
//const api = {

// key : "5fed6f8d0f429b3dd44a01adb529c662",
// base:  "http://api.openweathermap.org/data/2.5/"
//}

function Weath() {
    const [weather, setWeather] = useState({});
    const [cityname, setCityname] = useState('');

    function Weather() {
        console.log(cityname)
        axios.get("http://localhost:8000/api/weather", { params: { cityname: cityname } })
            .then(res => {
                setWeather(res.data)
                console.log("WEATHER")
            })
        };

    const search = evt => {
        if (evt.key === "Enter") {
            Weather()
        }
    }
    const dateBuilder = (d) => {
        let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre",
            "October", "Novembre", "Decembre"];
        let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

        let day = days[d.getDay()]
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
       
        return `${day} ${date} ${month} ${year}`
    }
    
    const tomorrow = (t)=> {
        let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre",
            "October", "Novembre", "Decembre"];
        let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

        let day = days[t.getDay()+1]
        let date = (t.getDate()+1);
        let month = months[t.getMonth()];
        let year = t.getFullYear();
       
        return `${day} ${date} ${month} ${year}`
    }
    
        
        


    return (
        <div className={(typeof weather.main != "undefined") ?
            ((weather.main.temp > 16) ? 'weath warm' : 'weath') : 'weath'}>
            <main>
                <div className="search-box">
                    <input type="text"
                        className="Search-bar"
                        placeholder="Search..."
                        onChange={e => setCityname(e.target.value)}
                        value={cityname}
                        onKeyPress={search} />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°c
                    </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    
                     <div>
                         <div className="location-box">
                         <div className="date">{tomorrow(new Date())}</div>
                     </div>
                     <div className="weather-box">
                         <div className="temp">
                             {Math.round(weather.main.temp)}°c
                 </div>
                         <div className="weather">{weather.weather[0].main}</div>
                     </div>
                 </div>
                </div>
                ) : ('')}
            </main>


        </div>
        
    );
}

// }
export default Weath;