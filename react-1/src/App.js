import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
     render() {
          return (
               <div className="App">
                    <h1> Hi, I'm a react App</h1>
               </div>
          );
          // return React.createElement(
          //      "App",
          //      { className: "App" },
          //      React.createElement("h1", null, "Testing")
          // );
     }
}

export default App;
