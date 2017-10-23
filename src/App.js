import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return(
  <MuiThemeProvider>
    <h1>RijksMuseum</h1>
    <Header />
    <Main />
  </MuiThemeProvider>)
  }
}

export default App;
