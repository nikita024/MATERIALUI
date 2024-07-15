import SearchBox from "./SearchBox"
import InfoBox from"./infoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city:"Delhi",
        temp: 25.05,
        feelslike:309.02,
        tempMin: 310.99 ,
        tempMax: 311.2 ,
        humidity: 17,
        weather: "haze",
  })

     let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
     }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}