import React from "react";
import {FaMailBulk} from "react-icons/fa";

export default function Email({value, setValue=f=>f}){
  return (    
    <label for="email"><FaMailBulk/> Enter your email:
      <input type="email" 
        id="email" size="30" 
        placeholder="enter you email"         
        value={value} 
        onChange={e=>setValue(e.target.value)}         
        pattern = "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        title="не корректно введённая элетронная почта"
        required
      />
    </label>
    
  )
}