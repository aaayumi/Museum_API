import React, { Component } from 'react';
import Header from './components/header';
import Collection from './components/Collection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Collection />
      </div>
    );
  }
}

export default App;
