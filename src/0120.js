/**
 * Props
 */

import React, { Component } from 'react';
class Who extends Component {
    render() {
        return ( <span>{this.props.name}</span> );
    }
}
class App extends Component {
    render() {
        return ( <div>Hello <Who name={"World!"} /></div> );
    }
}
export default App;
