import React, { Component } from "react";
import "./card-list.styles.css";

import Card from '../card/Card'

export class CardListComponenet extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log("Card");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((users) => {
          return (
           <Card users={users}/>
          );
        })}
      </div>
    );
  }
}

export default CardListComponenet;
