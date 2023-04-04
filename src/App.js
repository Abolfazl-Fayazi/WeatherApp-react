import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import SearchBox from "./components/search-box";
import CurrentWeatherResult from "./components/current-weather-result";

function App() {
  //...........................................

  const [currentForecast, setCurrentForecast] = useState({});

  //...........................................

  const getCurrentForecast = function (currentForecast0) {
    setCurrentForecast(currentForecast0);
  };

  //console.log(currentForecast);

  //...........................................

  return (
    <div className="App">
      <Header />
      <SearchBox getCurrentForecast={getCurrentForecast} />
      <CurrentWeatherResult
        currentForecast={currentForecast}
        setCurrentForecast={setCurrentForecast}
      />
    </div>
  );
}

export default App;
