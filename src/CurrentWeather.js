import React from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>
      <h2><FormattedDate /></h2>
    </div>
  );
}
