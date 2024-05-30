import React from "react";
import { useState } from "react";
// import "../css/index.css";

function Edit(props) {
  const [newInput, setNewInput] = useState(""); // отслеживаем состояние нового города

  const addNewCity = (newcity, oldInput) => {
    props.addNewCity(newcity, oldInput);
    setNewInput("");
    console.log(newcity);
  };

  return (
    <div>
      <input
        className="inputNewCity"
        onChange={(e) => {
          setNewInput(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          addNewCity(newInput, props.city.name);
        }}
      >
        Renew
      </button>
    </div>
  );
}

export default Edit;
