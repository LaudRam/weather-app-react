import "./App.css";
// import SearchEngine from "./SearchEngine";
import WeatherSummary from "./WeatherSummary";
import Footer from "./footer";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <h1>Weather app</h1> */}
        {/* <SearchEngine city="Paris" /> */}
        <WeatherSummary />
        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
