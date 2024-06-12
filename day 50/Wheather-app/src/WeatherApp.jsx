import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { dataInti } from "./init";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(dataInti);

  let updateInfo = (info) => {
    setWeatherInfo(info);
  };
  return (
    <div className="all">
      <h2>
        <i>Weather App by vicky</i>
      </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
