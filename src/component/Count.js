import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      c: 0,
    };
  }
  increase() {
    /*this.setState(
      {
        c: this.state.c + 1,
      },
      () => {
        console.log(this.state.c);
      }
    ); */

    this.setState ((prevState, props) => ({
     c: prevState.c+1
    }), () => { console.log(this.state.c)});
  }

  render() {
    return (
      <div>
        Count component: {this.state.c}
        <button onClick={() => this.increase()}> Increase</button>
      </div>
    );
  }
}

export default Count;
