import React, { Component } from 'react'

export class CardListComponenet extends Component {

    constructor(props){
        super(props)
        this.props = props
        
    }

  render() {
    const {monsters} = this.props;
    return (
      <div>
         {monsters.map((users) => {
          return <h1 key={users.id}>{users.name}</h1>;
        })}
      </div>
    )
  }
}

export default CardListComponenet
