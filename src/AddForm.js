import React, { useEffect } from "react";
import {FaAdjust,FaStar,FaMale,FaPhone } from "react-icons/fa";
import {userInputTagHook, useMountedRef } from "./userHook";
import SuccessResult from "./SuccesResult";
import Human from "./human";
import Email from "./Email";
import Phone from "./Phone";
import Bearthday from "./Bearthday";
import Comment from "./Comment";
import Fetch from "./useFetch";

export default function AddForm(){
  const [human,setHuman,clearHuman] = userInputTagHook("");
  const [email,setEmail,clearEmail ] = userInputTagHook("name@mail");
  const [phone,setPhone,clearPhone ] = userInputTagHook("");
  const [bearthday,setBearthday,clearBearthday ] = userInputTagHook( new Date(Date.now()).toDateString() );
  const [comment,setComment,clearComment] = userInputTagHook("");
  const [url,setURL] = userInputTagHook("");
  const mounted = useMountedRef();
  useEffect(()=>{
    let doc_form = document.querySelector(".add_form");    
    mounted.current?doc_form.classList.add("unable"):doc_form.classList.remove("unable");        
    document.querySelector(".add_form>button").disabled	= mounted.current;
    
  },[mounted.current]);

  const submit = event=>{ event.preventDefault();    
    let url = new URL("https://api.github.com");
    url.searchParams.set("user",human);
    setURL(url.href);
  }
  return (
    <>
      <form className="add_form" onSubmit={submit} 
        style={{
          backgroundColor:"rgba(100,34,34,.6)",padding:"5px",
          margin: "10px 0 0 0",
          }}
        >
        <Human value={human} setValue={setHuman}/><br/><br/>
        <Email value={email} setValue={setEmail}/><br/><br/>
        <Phone value={phone} setValue={setPhone}/><br/><br/>
        <Bearthday value={bearthday} setValue = {setBearthday}/><br/><br/>
        <Comment value={comment} setValue = {setComment}/><br/><br/>
        <button><FaStar color="red" />Add color</button>
      </form>
      <div>
        {<Fetch url={url} renderSuccess = {SuccessResult} mounted ={mounted.current}/>}
      </div>
    </>
  )
}


