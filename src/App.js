import "./App.css";
// import SearchEngine from "./SearchEngine";
import WeatherSummary from "./WeatherSummary";
import Footer from "./footer";
// import Forecast from "./Forecast";

function App() {
  return (
    <div className="container-fluid">

    <div className="App">
      <div className="weather-container">
        <WeatherSummary defaultCity="Bushbuckridge" />
        {/* <hr /> */}
        {/* <Forecast /> */}
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
