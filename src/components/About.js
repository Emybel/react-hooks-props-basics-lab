import React from "react";
import Links from "./Links";
function About({bio, linkedinLink, githubLink}) {

    return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links github ={githubLink} linkedin ={linkedinLink}/>
    </div>
  );
}

export default About;
