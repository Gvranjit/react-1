import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
     state = {
          persons: [
               { name: "Code", age: "28" },
               { name: "Subu", age: "18" },
               { name: "Cnobi", age: "29" },
          ],
     };

     switchNameHandler = (newName) => {
          console.log("was clicked" + Math.random() * 30);

          // this.state.persons[0].name = "CODEBABA";
          this.setState({
               persons: [
                    { name: newName, age: "29" },
                    { name: "Subu BABA", age: "19" },
                    { name: "Cnobi BABA", age: "30" },
               ],
          });
     };

     nameChangedHandeler = (event) => {
          this.setState({
               persons: [
                    { name: event.target.value, age: "29" },
                    { name: "Subu BABA", age: "19" },
                    { name: "Cnobi BABA", age: "30" },
               ],
          });
     };
     render() {
          return (
               <div className="App">
                    <h1> Hi, I'm an APP</h1>
                    <button onClick={this.switchNameHandler.bind(this, "AALU VYANTA GOBI")}>
                         Switch Name
                    </button>
                    <Person
                         name={this.state.persons[0].name}
                         age={this.state.persons[0].age}
                         click={this.switchNameHandler.bind(this, "AALU VYANTA")}
                         change={this.nameChangedHandeler}
                    />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

                    <Person />
                    <Person />
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
