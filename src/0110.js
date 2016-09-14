/**
 * Mere end en komponent
 */

import React, { Component } from 'react';
class Who extends Component {
    render() {
        return ( <span>World!</span> );
    }
}
class App extends Component {
    render() {
        return ( <div>Hello <Who /></div> );
    }
}
export default App;
