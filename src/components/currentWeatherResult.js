import classes from "./currentWeatherResult.module.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const CurrentWeatherResult = function (props) {
  //...........................................

  //const [a, setA] = useState({});

  //...........................................

  /*useEffect(() => { 
    setA(props.currentForecast);
  }, [props.currentForecast]);*/

  /*Object.entries(props.currentForecast).map((i) =>
    i[0] === "location" ? console.log(i[1]) : null
  );*/

  /*Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? console.log(i[1].temp_c) : null
  );*/

  const cityName = Object.entries(props.currentForecast).map((i) =>
    i[0] === "location" ? i[1].name : null
  );
  const regionName =
    " " +
    Object.entries(props.currentForecast).map((i) =>
      i[0] === "location" ? i[1].region : null
    );

  const countryName =
    " " +
    Object.entries(props.currentForecast).map((i) =>
      i[0] === "location" ? i[1].country : null
    );

 
  const currentTemp = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].temp_c : null
  );
  const realfeel = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].feelslike_c : null
  );
  const windSpeed = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].wind_kph : null
  );
  const UVindex = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].uv : null
  );
  const humidity = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].humidity : null
  );

  const condition = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].condition.text : null
  );

  const isDay = Object.entries(props.currentForecast).map((i) =>
    i[0] !== "location" ? i[1].is_day : null
  );

  //...........................................

  const conditionClass = function () {
    if (condition.toString().toLowerCase().includes("cloud")) {
      return `${classes.condition__cloudy}`;
    } else if (condition.toString().toLowerCase().includes("wind")) {
      return `${classes.condition__windy}`;
    } else if (
      condition
        .toString()
        .toLowerCase()
        .includes("rain" || "shower" || "drizzle")
    ) {
      return `${classes.condition__rainy}`;
    } else if (condition.toString().toLowerCase().includes("clear")) {
      return `${classes.condition__clear}`;
    } else if (condition.toString().toLowerCase().includes("sun")) {
      return `${classes.condition__sunny}`;
    } else if (
      condition
        .toString()
        .toLowerCase()
        .includes("fog" || "haze" || "dust")
    ) {
      return `${classes.condition__foggy}`;
    }
  };

  //...........................................
  const cloudIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(107, 181, 255)"
      stroke-width="2"
      stroke-linecap="round-"
      stroke-linejoin="round"
    >
      <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"></path>
    </svg>
  );

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="yellow"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(255, 255, 101)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );

  const dayPartlyCloudyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(255, 255, 101)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 2v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="M20 12h2"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
    </svg>
  );

  const nightPartlyCloudyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(255, 255, 101)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
      <path d="M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"></path>
    </svg>
  );

  const rainIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="dodgerblue"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
      <path d="m9.2 22 3-7"></path>
      <path d="m9 13-3 7"></path>
      <path d="m17 13-3 7"></path>
    </svg>
  );

  const windIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(176, 237, 255)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
    </svg>
  );

  const conditionIcon = function () {
    if (
      condition.toString().toLowerCase().includes("partly cloudy") ||
      isDay === 1
    ) {
      return dayPartlyCloudyIcon;
    } else if (
      condition.toString().toLowerCase().includes("partly cloudy") ||
      isDay === 0
    ) {
      return nightPartlyCloudyIcon;
    } else if (
      condition.toString().toLowerCase().includes("clear") ||
      isDay === 0
    ) {
      return moonIcon;
    } else if (
      condition.toString().toLowerCase().includes("clear") ||
      isDay === 1
    ) {
      return sunIcon;
    } else if (condition.toString().toLowerCase().includes("wind")) {
      return windIcon;
    } else if (
      condition
        .toString()
        .toLowerCase()
        .includes("rain" || "shower" || "drizzle")
    ) {
      return rainIcon;
    } else if (condition.toString().toLowerCase().match("cloudy")) {
      return cloudIcon;
    } else if (condition.toString().toLowerCase().match("sunny")) {
      return sunIcon;
    }
  };

  conditionIcon();
  //...........................................

  //console.log(props.currentForecast.current);

  const getData = async (e) => {
    await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=4f1675fae8704b8e891175532231003&q=${Object.entries(
        props.currentForecast
      ).map((i) => (i[0] === "location" ? i[1].name + ", " : null))}&aqi=no`
    )
      .then((res) => props.setCurrentForecast(res.data))
      .catch((err) => console.log(err));
    //console.log(props.currentForecast.location);
  };
  //...........................................

  if (props.currentForecast.location) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.card}>
          <button className={classes.refresh} onClick={getData}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 2v6h-6"></path>
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
              <path d="M3 22v-6h6"></path>
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
            </svg>
          </button>
          <h1>{cityName + regionName + " " + countryName}</h1>
          <div className={classes.sectioner}>
            <div>
              <h3>Current temperature: {currentTemp} °C</h3>
              <h3>RealFeel: {realfeel} °C</h3>
              <div className={classes.minMaxTemp}>
                <h3>Wind Speed: {windSpeed} kph</h3>
                <h3>UV index: {UVindex}</h3>
                <h3>Humidity: {humidity}%</h3>
              </div>
              <div>
                <h2 className={conditionClass()}>{condition}</h2>
              </div>
            </div>
            <div className={classes.conditionIcon}>{conditionIcon()}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeatherResult;
