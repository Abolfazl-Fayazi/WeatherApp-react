import classes from "./search-box.module.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const SearchBox = function (props) {
  //...........................................
  const [input, setInput] = useState();
  const [currentForecast0, setCurrentForecast0] = useState({});

  //...........................................

  const getInput = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const getData = async (e) => {
    await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=4f1675fae8704b8e891175532231003&q=${input}&aqi=no`
    )
      .then((res) => setCurrentForecast0(res.data))
      .catch((err) => console.log(err));
      setInput('')
  };

  useEffect(() => {
    setCurrentForecast0(currentForecast0);
    props.getCurrentForecast(currentForecast0);
  }, [currentForecast0]);

  //console.log(currentForecast0);

  //...........................................

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.searchEngin}>
          <input className={classes.input} value={input} onChange={getInput} />
          <button className={classes.checkButton} onClick={getData}>
            Check!
          </button>
        </div>
      </div>

      <div className={classes.unitsTitle}>Select Your Preferred Unit . . .</div>

      <div className={classes.units}>
        <div></div>
        <div className={classes.unit}>
          <input className={classes.unit_checkBox} type="checkbox" />
          Celsius
        </div>
        <div className={classes.unit}>
          <input className={classes.unit_checkBox} type="checkbox" />
          Farenheit
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
