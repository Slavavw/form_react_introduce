import React from "react";
import {BiBeer} from "react-icons/bi";
const getCurrentDate = ()=>new Date(Date.now()).toLocaleDateString("ru").split(".").reverse().join("-");

export default function Bearthday({value, setValue}){
  return (
    <>
      <label for="start"><BiBeer/>bearthday:</label>
      <input type="date" id="start" name="trip-start"
        value={value}
        min="2018-01-01" max={getCurrentDate()}
        onChange={e=>setValue(e.target.value)}
      />
    </>
  )
}

