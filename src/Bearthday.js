import React from "react";
import {} from "react-icons";



const getCurrentDate = ()=>new Date(Date.now()).toLocaleDateString("ru").split(".").reverse().join("-");



export default function Bearthday({value, setValue}){
  return (
    <>
      <label for="start">bearthday:</label>
      <input type="date" id="start" name="trip-start"
        value={value}
        min="2018-01-01" max={getCurrentDate()}
        onChange={e=>setValue(e.target.value)}
      />
    </>
  )
}

