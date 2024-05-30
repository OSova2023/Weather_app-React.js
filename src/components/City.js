import sun from "../img/only-sun.svg";
import clouds from "../img/clouds.svg";
import Edit from "./Edit";
import { useState } from "react";

function City(props) {
  const [inputActive, setInputActive] = useState(false);
  function changeActive() {
    setInputActive((inputActive) => !inputActive);
  }
  let isActive = inputActive ? "active" : "";

  return (
    <div className="city">
      <h3>{props.city.name}</h3>
      <p>Температура: {props.city.temp}</p>
      <p>Ощущается: {props.city.feels}</p>
      {props.city.temp >= 10 && <img src={sun} alt="r" />}
      {props.city.temp < 10 && <img src={clouds} alt="r" />}
      <button onClick={() => props.deleteWeather(props.city.name)}>
        Удалить
      </button>
      <button type="button" onClick={changeActive}>
        Change the city
      </button>
      {isActive && <Edit addNewCity={props.addNewCity} city={props.city} />}
    </div>
  );
}

export default City;
