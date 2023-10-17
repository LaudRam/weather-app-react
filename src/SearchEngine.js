// import React, { useState } from "react";
// import axios from "axios";
// import "./SearchEngine.css";

// export default function SearchEngine(props) {
//   let [weather, setWeather] = useState({});
//   let [city, setCity] = useState("");
//   let [loading, setLoading] = useState(false);

//   function displayWeather(response) {
//     console.log(response.data.wind.speed);
//     setLoading(true);
//     setWeather({
//       currentTemperature: response.data.temperature.current,
//       description: response.data.condition.description,
//       humidity: response.data.temperature.humidity,
//       windSpeed: response.data.wind.speed * 3.6,
//       icon: response.data.condition.icon_url,
//     });
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     let apiKey = "0f09bat43dccc526f81281do161a0bf2";
//     let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
//     axios.get(url).then(displayWeather);
//   }

//   let searchForm = (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         autoFocus="on"
//         placeholder="Enter a city..."
//         onChange={getCity}
//       />
//       <button type="Submit">Search</button>
//     </form>
//   );

//   function getCity(event) {
//     setCity(event.target.value);
//     console.log(event.target.value);
//   }

//   if (loading) {
//     return (
//       <div className="SearchEngine">
//         {searchForm}
//         <ul>
//           <li>Temperature: {Math.round(weather.currentTemperature)}°C</li>
//           <li className="description">Description: {weather.description}</li>
//           <li>Humidity: {weather.humidity}%</li>
//           <li>Wind: {Math.round(weather.windSpeed)}km/hr</li>
//           <li>
//             <img src={weather.icon} alt={weather.description} />
//           </li>
//         </ul>
//       </div>
//     );
//   } else {
//     return searchForm;
//   }
// }
