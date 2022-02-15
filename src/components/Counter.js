import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        this.setState({
            count: this.state.count+1
    }, ()=>
    console.log("this is callback function state value: ", this.state.count))
    }

    decrement() {
    this.setState((prevState, props) => ({
        count: prevState.count - 1}), () => 
        console.log("this is callback function state value: ", this.state.count))
    }

    decrementFive() {
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
    }

  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button onClick={() => this.increment()}>Increment</button>
          <button onClick={() => this.decrementFive()}>Decrement</button>
        </div>
    )
  }
}

export default Counter