import React, { useContext } from "react";
import CloudyIcon from "../../../assets/icons/cloud.svg";
import FeelsLikeIcon from "../../../assets/icons/feelsLike.svg";
import HumidityIcon from "../../../assets/icons/humidity.svg";
import TempMaxIcon from "../../../assets/icons/temp-max.svg";
import TempMinIcon from "../../../assets/icons/temp-min.svg";
import WindIcon from "../../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";
const WeatherCondition = () => {
  const { weatherData } = useContext(WeatherContext);
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudePercentage,
    wind,
    climate,
    feelsTemp,
  } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The Climate is: <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{maxTemperature}°</p>
            <img src={TempMaxIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{minTemperature}°</p>
            <img src={TempMinIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={HumidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudePercentage}%</p>
            <img src={CloudyIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={WindIcon} alt="wind" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Feels Like</span>
          <div className="inline-flex space-x-4">
            <p>{feelsTemp}°</p>
            <img src={FeelsLikeIcon} alt="wind" className="w-6 h-6" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCondition;
