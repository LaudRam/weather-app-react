import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="row forecast-container">
      <div className="col-sm">
        <h3>Wed</h3>
        <ReactAnimatedWeather
          icon={"CLOUDY"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>21°C</p>
      </div>
      <div className="col-sm">
        <h3>Thurs</h3>
        <ReactAnimatedWeather
          icon={"SNOW"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>29°C</p>
      </div>
      <div className="col-sm">
        <h3>Fri</h3>
        <ReactAnimatedWeather
          icon={"SLEET"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>23°C</p>
      </div>
      <div className="col-sm">
        <h3>Sat</h3>
        <ReactAnimatedWeather
          icon={"FOG"}
          color={"red"}
          size={64}
          animate={true}
        />
        <p>12°C</p>
      </div>
      <div className="col-sm">
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
