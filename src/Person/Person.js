import React from "react";
import "./Person.css";
// import Radium from "radium";
import styled from "styled-components";
const person = (props) => {
     // const style = {
     //      "@media (min-width:500px": {
     //           width: "450px",
     //      },
     // };

     const StyledDiv = styled.div`
          width: 60%;
          border: 1px solid #eee;
          margin: 16px auto;
          box-shadow: 0 2px 3px #ccc;
          padding: 1rem;
          @media (min-width: 500px) {
               width: 450px;
          }
     `;
     return (
          // <div className="Person" style={style}>

          <StyledDiv>
               <p onClick={props.click}>
                    I'm {props.name || "a person"} and I am{" "}
                    {props.age || Math.floor(Math.random() * 30)} years old.
               </p>
               <p>{props.children}</p>
               <input type="text" value={props.name} onChange={props.change} />
          </StyledDiv>
     );
};

export default person;
