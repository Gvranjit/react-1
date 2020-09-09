import React from "react";

import classes from "./Person.css";
// import Radium from "radium";
import styled from "styled-components";
const person = (props) => {
     // const style = {
     //      "@media (min-width:500px": {
     //           width: "450px",
     //      },
     // };

     return (
          // <div className="Person" style={style}>

          <div className={classes.Person}>
               <p onClick={props.click}>
                    I'm {props.name || "a person"} and I am{" "}
                    {props.age || Math.floor(Math.random() * 30)} years old.
               </p>
               <p>{props.children}</p>
               <input type="text" value={props.name} onChange={props.change} />
          </div>
     );
};

export default person;
