import React, { Component } from 'react'

export class StateVSProps extends Component {
    constructor(){
        super(); //calling the super class constructor
        this.state = { Name: "khizar", age: 24};
    }
  render() {
    return (
      <div>hello my name is {this.state.Name} and age is {this.state.age}</div>
    );
  }
}

export default StateVSProps;