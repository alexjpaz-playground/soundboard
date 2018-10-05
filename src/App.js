import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Howl } from 'howler';

class App extends Component {
  render() {
    const h = new Howl({
      src: ['https://firebasestorage.googleapis.com/v0/b/soundboard-alexjpaz.appspot.com/o/mmmwatchasaaayyy2.mp3?alt=media'],
      html5: true
    });
    h.play();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
