import React, { Component } from "react";

// Code CoordinatesButton Component Here

class CoordinatesButton extends Component {
  handleClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };
  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }
}

export default CoordinatesButton;
