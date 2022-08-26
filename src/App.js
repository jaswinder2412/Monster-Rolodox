import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      prevmonster:[]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users ,  prevmonster : users}));
  }

  render() {
    return (
      <div className="App">
        <input type="text" name="Search-text"  id="searchbar" placeholder="Search Monster" onKeyUp={(e)=>{
          const serchmonster = e.target.value.toLocaleLowerCase();
          console.log(serchmonster)
          if(serchmonster !== ''){
            this.setState({ monsters: this.state.prevmonster })
            const searchedMonster =  this.state.monsters.filter((monsters)=>{
              return monsters.name.toLocaleLowerCase().includes(serchmonster)
            })
            this.setState({ monsters: searchedMonster })
          }
          else {
            this.setState({ monsters: this.state.prevmonster })
          }
          
        }}/>

        {this.state.monsters.map((users) => {
          return <h1 key={users.id}>{users.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
