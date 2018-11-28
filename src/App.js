import React, { Component } from 'react';
import './App.css';
import Headlines from './Details/Headlines.jsx';
import Projects from './Details/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h4>Welcome to </h4>
            <h1>Johanna's Portfolio</h1>
          </p>
        </header>
        <Headlines />
        <Projects/>
      </div>
     
    );
  }
}

export default App;
