import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import sun from "./img/sun.svg";
import axios from "axios";

function App() {
  const [cities, setCities] = useState([]);
  const API = "0aa1e83adb68358bf67f9f7ad2de9f86";

  // нахожу ту карточку, которую меняют
  const addNewCity = (newcity, oldcity) => {
    const findIndex = cities.findIndex((cities) => cities.name === oldcity);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${newcity}&appid=${API}&units=metric`;
    if (newcity === "") return;
    console.log(findIndex);
    axios
      .get(url)
      .then((res) => {
        const newObj = {
          name: newcity,
          temp: res.data.main.temp,
          feels: res.data.main.feels_like,
        };
        cities.splice(findIndex, 1, newObj);
        setCities((cities) => [...cities]);
      })
      .catch((err) => console.log(err));
  };

  const getWeather = (city) => {
    if (city === "") return;

    const API = "3d9de74844d28377e81415151cbe6a66";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setCities((cities) => [
          {
            name: city,
            temp: res.data.main.temp,
            feels: res.data.main.feels_like,
          },
          ...cities,
        ]);
      })
      .catch((err) => console.log(err));
  };

  const deleteWeather = (city) => {
    const newCities = cities.filter((el) => {
      return el.name !== city;
    });
    setCities(newCities);
  };

  return (
    <div className="main">
      <img src={sun} className="sun" alt="f" />
      <Form getWeather={getWeather} />
      <Weather
        cities={cities}
        deleteWeather={deleteWeather}
        addNewCity={addNewCity}
      />
    </div>
  );
}

export default App;
