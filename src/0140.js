/**
 * input text
 */
import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {name: "World"}
    }
    render() {
        return ( <div>
                    <div>
                        What is your name?
                        <input
                            type="text"
                            placeholder="name"
                            value={this.state.name}
                            ref="text"
                            onChange={() => this.setState({name: this.refs.text.value})}
                        />
                    </div>
                    <div>Hello {this.state.name}!</div>
                </div>
            );
    }
}
export default App;

