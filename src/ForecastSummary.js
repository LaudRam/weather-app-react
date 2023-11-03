import React, { useState, useEffect } from "react";
import ForecastPrev from "./Forecast";
import axios from "axios";

export default function ForecastSummary(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row forecast-container">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col-sm" key={index}>
                <ForecastPrev data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "0f09bat43dccc526f81281do161a0bf2";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleForecast);

    return null;
  }
}
