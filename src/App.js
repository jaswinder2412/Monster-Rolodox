import "./App.css";

import React, { Component } from "react";
import CardListComponenet from "./components/card-list/CardListComponenet";
import SearchBarComponent from "./components/search-box/SearchBarComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfilter:''
    };
  }

  handleOnchange = (e)=>{
    const serchmonster = e.target.value.toLocaleLowerCase();
     this.setState({ searchfilter: serchmonster })          
 }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users}));
  }

  render() {
    const {monsters, searchfilter} = this.state;
    const handleOnchange = this.handleOnchange;

    const searchedMonster =  monsters.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(searchfilter)
    })

    return (
      <div className="App">

      <h1 className="app-title">Monster Rolodox</h1>

      <SearchBarComponent
         className = 'monster-search-box'
        placeHolder='Search Monster'
        handleOnchange={handleOnchange} 
      />

       <CardListComponenet monsters={searchedMonster}/>
      </div>
    );
  }
}

export default App;
