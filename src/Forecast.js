import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="five-cols">
        <h3>Wed</h3>
        <ReactAnimatedWeather
          icon={"CLOUDY"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>21°C</p>
      </div>
      <div className="five-cols">
        <h3>Thurs</h3>
        <ReactAnimatedWeather
          icon={"SNOW"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>29°C</p>
      </div>
      <div className="five-cols">
        <h3>Fri</h3>
        <ReactAnimatedWeather
          icon={"SLEET"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>23°C</p>
      </div>
      <div className="five-cols">
        <h3>Sat</h3>
        <ReactAnimatedWeather
          icon={"FOG"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>12°C</p>
      </div>
      <div className="five-cols">
        <h3>Sun</h3>
        <ReactAnimatedWeather
          icon={"RAIN"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>19°C</p>
      </div>
    </div>
  );
}
