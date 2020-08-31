import React from "react";
import "./Person.css";

const person = (props) => {
     return (
          <div className="Person">
               <p onClick={props.click}>
                    I'm {props.name || "a person"} and I am{" "}
                    {props.age || Math.floor(Math.random() * 30)} years old.
               </p>
               <p>{props.children}</p>
               <input type="text" onChange={props.change} value={props.name} />
          </div>
     );
};

export default person;
