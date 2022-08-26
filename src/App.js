import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfilter:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users}));
  }

  render() {
    const searchedMonster =  this.state.monsters.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(this.state.searchfilter)
    })
    return (
      <div className="App">
        <input type="text" name="Search-text"  id="searchbar" placeholder="Search Monster" onKeyUp={(e)=>{
           const serchmonster = e.target.value.toLocaleLowerCase();
            this.setState({ searchfilter: serchmonster })          
        }}/>

        {searchedMonster.map((users) => {
          return <h1 key={users.id}>{users.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
