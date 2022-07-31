import {FaMale} from "react-icons/fa";
import React, { useEffect } from "react"
export default function Human({value,setValue=f=>f}){
  useEffect( ()=>{console.log(value)},[value]);
  return(    
      <label for="textHuman"><FaMale/>Fierst name Last name:
        <input value={value} type="text" id ="human" name="textHuman"  
          placeholder="enter you fierst and last name" 
          onChange={(e)=>{setValue( e.target.value.toUpperCase())}} 
          pattern = "[A-Za-z]{3,30} [A-Za-z]{3,30}"
          title = "Поле может состоять только из 2-х слов (имя и фамилия) латинского алфавита. Минимальная длина каждого слова 3 символа, максимальная 30. Между словами может быть только 1 пробел."
          required          
        />
      </label>        
    
  )
}
