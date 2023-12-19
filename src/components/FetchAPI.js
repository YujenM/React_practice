import React, { useState } from "react";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

export default function FetchAPI() {
const [data, setData] = useState(null);
const [error, setError] = useState(null);


const serach=async()=>{
    const element=document.getElementsByClassName('Getcountry');
    if (element[0].value===""){
        return 0;
    }
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=0897565e7b21c0102c98af408376b132`;
    await fetch(url).then((result) => {
        if (!result.ok) {
            throw new Error("Http Error");
        }
        return result.json();
        })
        .then((res) => {
        setData(res);
        })
        .catch((error) => {
        setError(error);
        console.log('Error fetching weather data:', error);
        });
}
let temprature=data ? Math.round(data.main.temp - 273.15) : null;
let sunrise=data?data.sys.sunrise*1000:null;
let sunset=data?data.sys.sunset*1000:null;
const sunrisetime = sunrise ? new Date(sunrise).toTimeString() : null;
const sunsettime = sunset ? new Date(sunset).toTimeString() : null;
const timestamp=data?data.dt:null;
const formatted_time = timestamp ? new Date(timestamp * 1000).toLocaleString() : null;



return(
    <div className="container weather">
        <div className="weatherchild">
            <div className="bgcolor">
                <div className="getinformation">
                    <input type="text" placeholder="Enter country name" className="Getcountry"/>
                    <FontAwesomeIcon className="Apisearchbtn" onClick={serach} icon={icon.faMagnifyingGlass} size="2xl"/>
                </div>
                {error?(
                    <div>
                        <p>Error in finding this country</p>
                    </div>
                ):(
                    data &&(
                        <div className="datasapi">
                            <img className="Weatherimg" alt="weather icon" src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
                            <p className="Apidata">Description: {data.weather[0].description}</p>
                            <p className="Apidata">{formatted_time}</p>
                            <p className="Apidata">Country: {data.name}</p> 
                            <p className="Apidata">Temprature: {temprature}℃</p>
                            <p className="Apidata">Sunrise: {sunrisetime}</p>
                            <p className="Apidata">Sunset: {sunsettime}</p>  
                        </div>
                    )
                )
                }
            </div>
        </div>

    </div>
)
}



