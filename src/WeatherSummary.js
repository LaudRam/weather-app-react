import React, { useState } from "react";
import axios from "axios";
import "./WeatherSummary.css";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import { Bars } from "react-loader-spinner";

export default function WeatherSummary(props) {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  let [loading, setLoading] = useState(false);

  function displayWeather(response) {
    // console.log(response.data);

    setLoading(true);
    setWeather({
      currentTemperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed * 3.6,
      icon: response.data.condition.icon_url,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "0f09bat43dccc526f81281do161a0bf2";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  let searchForm = (
    <form onSubmit={handleSubmit} className="SearchEngine">
      <input
        type="search"
        autoFocus="on"
        placeholder="Enter a city..."
        onChange={getCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  function getCity(event) {
    setCity(event.target.value);
  }

  if (loading) {
    return (
      <div className="weather-summary">
        {searchForm}
        <div className="city-card mt-4">
          {/* <h1>{weather.city}</h1> */}
          <CurrentWeather data={weather} />
          {/* <h2>
              <FormattedDate date={weather.date}/>
            </h2> */}
        </div>
        <div className="row conditions-icons-card">
          {/* <div className="col-sm icon-temp-card"> */}
            <div className="col-sm icon-card">
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="col-sm temp-card">
              <strong>{Math.round(weather.currentTemperature)} <span className="temp-unit">°C</span></strong>
              {/* <p className="description">{weather.description}</p> */}
            {/* </div> */}
          </div>
          <div className="col-sm conditions-card">
            <ul>
              <li className="description">{weather.description}</li>
              <li>Wind: {Math.round(weather.windSpeed)}km/hr</li>
              <li>Humidity: {weather.humidity}%</li>
            </ul>
          </div>
        </div>
        <hr />
        <Forecast />
      </div>
    );
  } else {
    search();
    return (
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
    // return searchForm;
    // return handleSubmit;
    // return props.city;
  }
}
