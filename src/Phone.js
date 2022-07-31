import React from "react";
import {BiPhoneCall} from "react-icons/bi";

const  getMask = (template = "+7 (___) ___ ____")=>template;
function maskPhone(event) { let keyCode, target = event.target;
  event.keyCode && (keyCode = event.keyCode);
  let pos = target.selectionStart;
  if (pos < 3) event.preventDefault();
  let matrix = getMask(), i = 0,
    def = matrix.replace(/\D/g, ""),
    val = target.value.replace(/\D/g, ""),
    new_value = matrix.replace(/[_\d]/g, function(a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a
    });
  i = new_value.indexOf("_");
  if (i != -1) {
    i < 5 && (i = 3);
      new_value = new_value.slice(0, i)
  }
  let reg = matrix.substr(0, target.value.length).replace(/_+/g,
      function(a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (!reg.test(target.value) || target.value.length < 5 || keyCode > 47 && keyCode < 58) target.value = new_value;
  if (event.type == "blur" && target.value.length < 5)  target.value = ""
}

export default function Phone({value, setValue=f=>f}){
  return (
    <>
      <label for="phone"><BiPhoneCall/>Enter phone number:</label>      
      <input id="phone" name="phone"
       placeholder="+7 (___) ___ ____"       
       value={value} 
       onChange={e=>setValue(e.target.value)} 
       onKeyDown ={e=>maskPhone(e)}
       onFocus = {e=>maskPhone(e)}       
       required          
      />
    </>
  )
}
