import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (e) => {
    // let newColor = this.props.selectedColor();
    // this.props.selectedColor()
    e.target.style.backgroundColor = this.props.selectedColor();
  }
  
  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
