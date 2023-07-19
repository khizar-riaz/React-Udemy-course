import React, { Component } from 'react'

export class StateVSProps extends Component {
    constructor(){
        super(); //calling the super class constructor
        this.state = { Name: "khizar", age: 24};
    }
    changeData() {
        //debugger;
        this.setState({
         Name: "Ali",
         age: 21
        });
   
    }
  render() {
    return (
      <div>
        <h2>hello my name is {this.state.Name} and age is {this.state.age}</h2>
        <button onClick={()=>this.changeData()}>Change Details</button>
      </div>
    );
  }
}

export default StateVSProps;