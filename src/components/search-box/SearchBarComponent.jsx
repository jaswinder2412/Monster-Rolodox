import React, { Component } from 'react'

export class SearchBarComponent extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

  render() {
    return (
      <div>
          <input type="text" name="Search-text"  id="searchbar" placeholder="Search Monster" onChange={this.props.handleOnchange}/>
      </div>
    )
  }
}

export default SearchBarComponent
