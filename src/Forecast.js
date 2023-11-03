import React from "react";
import "./Forecast.css";

export default function ForecastPrev(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}° `;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }
  console.log(props.data.condition.description);

  function icon() {
    let icon = props.data.condition.icon_url;
    let iconDescription = props.data.condition.description;

    return <img src={icon} alt={iconDescription} className="forecastIcon" />;
  }

  return (
    <div className="ForecastPrev">
      <h3 className="forecast-time">{day()}</h3>
      {icon()}
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
