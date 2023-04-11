import classes from "./searchBox.module.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const SearchBox = function (props) {
  //...........................................
  const [input, setInput] = useState();
  const [currentForecast0, setCurrentForecast0] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  //const [isMetric, setIsMetric] = useState(false);
  //const [isImperial, setIsImperial] = useState(false);

  //...........................................
  const goToCityArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-up-right"
    >
      <line x1="7" x2="17" y1="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
  //...........................................

  const getInput = (e) => {
    setInput(e.target.value);
  };
  //console.log(input)

  const getData = async (a) => {
    await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=4f1675fae8704b8e891175532231003&q=${a}&aqi=no`
    )
      .then((res) => setCurrentForecast0(res.data))
      .catch((err) => console.log(err));
    setInput("");
    setSuggestions([]);
  };

  useEffect(() => {
    setCurrentForecast0(currentForecast0);
    props.getCurrentForecast(currentForecast0);
  }, [currentForecast0]);

  //console.log(currentForecast0);

  /*const metricSystem = () => {
    console.log("metricSystem");
  };
  const imperialSystem = () => {};*/

  //...........................................

  const getSuggestions = (e) => {
    Axios.get(
      `http://api.weatherapi.com/v1/search.json?key=4f1675fae8704b8e891175532231003 &q=${e.target.value}`
    )
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log(err));
  };

  //...........................................

  const onInputChange = (e) => {
    getInput(e);
    getSuggestions(e);
  };
  console.log(input);
  console.log(suggestions);

  //...........................................
  const goToTheSuggestedCity = async (e) => {
    await setInput(e.target.value);
    await getData(e.target.value);
  };

  //...........................................

  return (
    <div>
      <div className={classes.wrapper}>
        <h4>Enter at least 3 characters to have search suggestions . . . </h4>
        <div className={classes.searchEngin}>
          <input
            className={classes.input}
            value={input}
            onChange={onInputChange}
            placeholder="Enter your location . . ."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getData(input);
              }
            }}
          />
          <button
            className={classes.checkButton}
            onClick={() => getData(input)}
          >
            Check!
          </button>
        </div>

        <div className={classes.suggestionsWrapper}>
          {suggestions.map((i) => (
            <div className={classes.suggestions}>
              <div>
                <button
                  className={classes.suggestion}
                  onClick={goToTheSuggestedCity}
                  value={i.url}
                >
                  {i.name + ", " + i.region + ", " + i.country}
                  {goToCityArrowIcon}
                </button>
                {/* <div>{goToCityArrowIcon}</div> */}
              </div>
              <hr className={classes.line} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className={classes.unitsTitle}>Select Your Preferred Unit . . .</div>

      <div className={classes.units}>
        <div></div>
        <div className={classes.unit}>
          <input
            className={classes.unit_checkBox}
            type="checkbox"
            //on={metricSystem}
          />
          Metric
        </div>
        <div className={classes.unit}>
          <input className={classes.unit_checkBox} type="checkbox" />
          Imperial
        </div>
      </div> */}
    </div>
  );
};

export default SearchBox;
