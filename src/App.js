import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Multiply from './Multiply';
import Button from './Button';
class App extends Component {

  state = {
    active: true
  }

  changeHandler = () => {
    this.setState(prevState => ({

      active: !prevState.active

    }))
  }

  render() {
    return (
      <div className="App">
        <Multiply />
        <Button active={this.state.active} change={this.changeHandler} />
        {this.state.active && <Clock />}
      </div>
    );
  }
}

export default App;
