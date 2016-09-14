/**
 * Værdier fra javascript
 */

import React, { Component } from 'react';
class App extends Component { 
    constructor(props) {
        super(props)
        this.text = "Hello World!"
    }
    render() {
        return (
            <div> {this.text} </div>
        )
    }
}
export default App;
