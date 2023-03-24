import classes from "./current-weather-result.module.css";
import { useEffect, useState } from "react";

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

  console.log(props.currentForecast.current);

  //...........................................

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h1>
          {Object.entries(props.currentForecast).map((i) =>
            i[0] === "location" ? i[1].name + ", " : null
          )}

          {Object.entries(props.currentForecast).map((i) =>
            i[0] === "location" ? i[1].region + ", " : null
          )}

          {Object.entries(props.currentForecast).map((i) =>
            i[0] === "location" ? i[1].country : null
          )}
        </h1>
        <div className={classes.sectioner}>
          <div>
            <h3>
              {"Current temperature: " +
                Object.entries(props.currentForecast).map((i) =>
                  i[0] !== "location" ? i[1].temp_c : null
                ) +
                " °C"}
            </h3>
            <h3>
              {"RealFeel: " +
                Object.entries(props.currentForecast).map((i) =>
                  i[0] !== "location" ? i[1].feelslike_c : null
                ) +
                " °C"}
            </h3>
            <div className={classes.minMaxTemp}>
              <h3>MaxTemp: 6.11°C</h3>
              <h3>MinTemp: 3.89°C</h3>
            </div>
            <div>
              <h2 className={classes.condition}>Scattered Clouds</h2>
            </div>
          </div>
          <div className={classes.conditionIcon}>
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
              <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherResult;
