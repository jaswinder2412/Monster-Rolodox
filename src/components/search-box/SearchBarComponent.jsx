import React, { Component } from 'react'
import './search-box.css'

export class SearchBarComponent extends Component { 
  render() {
    return (
      <div>
          <input type="search" className={`search-box ${this.props.className}`} name="Search-text"  id="searchbar" placeholder={this.props.placeHolder} onChange={this.props.handleOnchange}/>
      </div>
    )
  }
}

export default SearchBarComponent
