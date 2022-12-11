import React, { Component } from 'react';
import { render } from 'react-dom';
import Steps from './Steps';
import NavBar from './NavBar';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Steps />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
