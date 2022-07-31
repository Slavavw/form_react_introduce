import React, { useEffect, useRef, useState } from "react";
import {BounceLoader} from "react-spinners";

export function useMountedRef(){
  const mounted = useRef(false);
  useEffect(()=>{
    mounted.current = true;
    return (()=> mounted.current= false)
  });
  return mounted;
}

function useFetch(url){  
  const [data,setData] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);  
  useEffect(()=>{    
    if (!url) return;
    setLoading(true);
    fetch(url)    
    .then(data=>data.json())
    .then(setData)
    .then(setLoading(false))
    .catch(setError)},[url]);
  return ({loading,error,data})
}



export default function Fetch({url,
  renderSuccess,
  mounted,
  loadingFallback = ()=><><h2>loading...</h2><BounceLoader/></>  
}){  
  if (!url) return null;
  const {data,loading,error} = useFetch(url);
  if (loading) return loadingFallback;
  if (error) {mounted=!mounted; throw new Error(error)};
  if (!data) return null;
  !mounted; 
  return renderSuccess( {...data});
}