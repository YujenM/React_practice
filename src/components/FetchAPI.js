import React, { useState } from "react";

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


return (
<div className="container">
<input type="text" placeholder="Enter country name" className="Getcountry"/>
    <button onClick={serach}>CLickme</button>
    {error ? (
    <div>
        <p>
        This is a free API, so there is a limit in getting data, and this
        message is shown due to reaching its limit.
        </p>
    </div>
    ) : (
    data && (
        <div>
        <img
            alt="weather icon"
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        />
        <h1>{data.name}</h1>
        
        </div>
    )
    )}
</div>
);
}
