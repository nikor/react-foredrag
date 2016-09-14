/**
 * Render liste af ting
 */
import React, { Component } from 'react';
class App extends Component {
    render() {
        return ( <div>
                Hello
                {['John','Dan'].map(x => (<span> {x}</span>))}!
            </div> );
    }
}
export default App;
