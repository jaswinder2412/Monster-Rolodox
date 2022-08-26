import { Component } from "react";

import "./card.styles.css";
class Card extends Component{

    render() {
        const {users} = this.props
        return (
        <div className="card-container" >
        <img src={`https://robohash.org/${users.id}?set=set2`}alt={`${users.name}`} />
      <h1 >{users.name}</h1>
    </div>
    )
        }
}

export default Card