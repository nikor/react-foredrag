/**
 * Jeres tur!
 */

//lav increment.



























import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
      return {count: 0}
  },
  render: function() {
    return (
      <div>
        <div> counter: {this.state.count}</div>
        <a href='#' onClick={() => this.setState({count: this.state.count + 1})}> increment </a>
      </div>
    );
  }
});

export default App;
