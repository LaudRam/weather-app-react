import "./App.css";
import WeatherSummary from "./WeatherSummary";
import Footer from "./footer";

function App() {
  return (
    <div className="container-fluid">

    <div className="App">
      <div className="weather-container">
        <WeatherSummary defaultCity="Bushbuckridge" />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
