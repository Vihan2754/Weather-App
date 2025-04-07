import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./InfoBox.css"
import "./WeatherApp.css"
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 26.02,
        humidity: 9,
        temp: 26.02,
        tempMax: 26.02,
        tempMin: 26.02,
        weather: "clear sky",
    })

    let updateInfo=(newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (

        <div className="container"> {/* Add a flex parent */}
            <div className="weatherApp">
                <h1>Weather App</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    )
}