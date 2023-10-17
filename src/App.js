import "./App.css";
import SearchEngine from "./SearchEngine";
import { RotatingLines } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <SearchEngine />
        <RotatingLines
          strokeColor="yellow"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </header>
    </div>
  );
}

export default App;
