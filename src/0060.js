/**
 * Ændring af værdier (No go!)
 */

import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props)
        this.text = "Hello World!"
    }
    render() {
        return (
            <div>
                {this.text}
                <a href='#' onClick={() => this.text = 'Hello John!'}>go!</a>
            </div>
        )
    }
}
export default App;
