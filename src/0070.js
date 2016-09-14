/**
 * Ændring af state
 */

import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {text: "Hello World!"}
    }
    render() {
        return (
            <div>
                {this.state.text}
                <a href='#' onClick={() => this.setState({text: 'Hello John!'})}>go!</a>
            </div>
        )
    }
}
export default App;
