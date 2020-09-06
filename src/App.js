import React, { Component } from "react";

import "./App.css";

import Person from "./Person/Person";

import Radium, { StyleRoot } from "radium";

class App extends Component {
     state = {
          persons: [
               { id: "asdfasdfasdf", name: "Code", age: "28" },
               { id: "asdfasdfasdfasdf", name: "Subu", age: "18" },
               { id: "wqerwerasdfasdf", name: "Cnobi", age: "29" },
          ],
          showPersons: false,
     };

     nameChangedHandeler = (id, event) => {
          const personIndex = this.state.persons.findIndex((person) => {
               return person.id === id;
          });

          const persons = [...this.state.persons];

          persons[personIndex].name = event.target.value;

          this.setState({
               persons: persons,
          });
     };

     togglePersonsHandler = (index) => {
          const doesShow = this.state.showPersons;
          this.setState({
               showPersons: !doesShow,
          });
     };

     deletePersonHandler = (index) => {
          const persons = this.state.persons;
          persons.splice(index, 1);
          this.setState({ persons: persons });
     };
     render() {
          let persons = null;
          const style = {
               background: "green",
               color: "white",
               padding: "0.5rem 5rem",
               ":hover": {
                    background: "#ffffaa",
                    color: "green",
                    cursor: "pointer",
               },
          };

          if (this.state.showPersons) {
               persons = (
                    <div>
                         {this.state.persons.map((person, index) => {
                              return (
                                   <Person
                                        name={person.name}
                                        age={person.age}
                                        key={person.id}
                                        // click={this.switchNameHandler.bind(this, index)}
                                        change={this.nameChangedHandeler.bind(this, person.id)}
                                        click={this.deletePersonHandler.bind(this, person.id)}
                                   />
                              );
                         })}
                    </div>
               );
               style.background = "maroon";
               style[":hover"] = {
                    background: "#ffffaa",
                    color: "red",
                    cursor: "pointer",
               };
          }

          const classes = [];
          if (this.state.persons.length <= 2) {
               classes.push("red");
          }
          if (this.state.persons.length <= 1) {
               classes.push("bold");
          }
          return (
               <StyleRoot>
                    <div className="App">
                         <h1> Hi, I'm an APP</h1>
                         <p className={classes.join(" ")}>Test Paragraph</p>
                         <button style={style} onClick={this.togglePersonsHandler}>
                              Switch Name
                         </button>

                         <div>{persons}</div>
                    </div>
               </StyleRoot>
          );
          // return React.createElement(
          //      "App",
          //      { className: "App" },
          //      React.createElement("h1", null, "Testing")
          // );
     }
}

export default Radium(App);
