import React from "react";

export default function SuccessResult({avatar_url,login,name,location}){
  !(avatar_url || login || name || location)?<h1>Nothing...</h1>:
  <div className="githubUser">    
    <img src={avatar_url} alt = {login} style = {{width:200}}/>
    <div>
      <h1>{login}</h1>
      {name && <p>{name}</p>}
      {location && <p>{location}</p>}
    </div>
  </div>
}

