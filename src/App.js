import React, { Component } from "react";

import classes from "./App.css";

import Person from "./Person/Person";

import styled from "styled-components";
// import Radium, { StyleRoot } from "radium";

const StyledButton = styled.button`
     background: ${(props) => (props.alt ? "maroon" : "green")};
     color: white;
     padding: 0.5rem 5rem;

     :hover {
          background: #ffffaa;
          color: ${(props) => (props.alt ? "maroon" : "green")};
          cursor: pointer;
     }
`;

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
          let btnClass = [classes.button];

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

               btnClass.push(classes.Red);
          }

          const assignedClasses = [];
          if (this.state.persons.length <= 2) {
               assignedClasses.push(classes.red);
          }
          if (this.state.persons.length <= 1) {
               assignedClasses.push(classes.bold);
          }
          return (
               <div className={classes.App}>
                    <h1> Hi, I'm an APP</h1>
                    <p className={assignedClasses.join(" ")}>Test Paragraph</p>
                    <button
                         className={btnClass.join(" ")}
                         alt={this.state.showPersons}
                         onClick={this.togglePersonsHandler}
                    >
                         Switch Name
                    </button>

                    <div>{persons}</div>
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
