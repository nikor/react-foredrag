/**
 * dele state
 */
import React, { Component } from 'react';
class Who extends Component {
    render() {
        return ( <span onClick={() => this.props.setName('John')}>{this.props.name}</span> );
    }
}
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {name: "World"}
    }
    render() {
        return ( <div>Hello <Who
            name={this.state.name}
            setName={(name) => this.setState({text: name})}
        />!</div> );
    }
}
export default App;
