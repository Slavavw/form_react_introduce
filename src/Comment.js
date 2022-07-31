import React from "react";
import {} from "react-icons";

export default function Comment({value, setValue=f=>f}){
  return(
    <>
      <label for="text">Add Comments:</label><br/>
      <textarea id="text" name="text" rows="12" 
        cols="50" value={value}          
        onChange={e=>setValue(e.target.value)}
        minLength = {10} maxLength = {300}
        title = "Сообщение должно быть не менее 10 символов и не более 300 символов."
      />
    </>
  )
}