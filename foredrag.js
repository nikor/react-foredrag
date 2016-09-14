     _____  ____  ____   ____ _____   __
    / _  / / __/ / _  / / __//_  _/  / /
   /   _/ / __/ /    / / /_   / /   / /
  /_/\_\ /___/ /_//_/ /___/  /_/   /_/
 _______________________________  __
/______________________________/ /_/

Det nye sort..


tale:
React er et framework til at lave bruger interfaces som har brug for meget state
som fx singe page apps.

Det man ofte rammer med meget functionalitet er at staten kommer til at blive
spredt ud of over det hele og det bliver svært at overskue de interaktioner som
der er på siden.

React prøver at løse dette ved at lade som om at hver eneste ændring tricker et
rerender af hele siden.

todo:
 - mere kontrast med angular og jquery vanila javascript
 - fake dom

-------------------------
| Men før vi starter... |
\-----------------------/

 - Clousures
var a = function(x) {return x + 1}
var a = (x) => {return x + 1} 
var a = (x) => x + 1 
var a = x => x + 1 

var b = (x,y) => x + y

var c = (x,y) => ({first: x, second: y})

 - map, reduce og filter
> [1,2,3].reduce((acc, e) => acc + e, 0)
6
> [1,2,3].map(x => x + 1)
[ 2, 3, 4 ]
> [1,2,3].reduce((acc, e) => acc + e, 0)
6
> [1,2,3].filter(x => x > 1)
[ 2, 3 ]

tale:
Fortæl hvad der sker.

----------------
| Hello world |
\--------------/
- App.js:

import React, { Component } from 'react';
class App extends Component {
  render() {
    return ( <div>Hello World!</div> );
  }
}
export default App;


tale:
Det her er hello world i react native.
Så der sker nogen ting...
Men det her er ikke javascript. Hvad sker der her?




------------
| Uden jsx |
\----------/
- App.js:

import React, { Component } from 'react';
class App extends Component {
  render() {
    return React.createElement('div', {}, 'Hello world!')
  }
}
export default App;


tale:
Så det er sådan det her ud unden jsx. Det vi kan se er den fake dom som bliver
lavet.

Men det bliver man træt af i længden og vi forstår allerede at læse html style
syntax så jsx it is.



--------------------------
| Værdier fra javascript |
\------------------------/

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


-----------------------
| Ændring af værdier  |
\---------------------/

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


---------------------
| Ændring af state  |
\-------------------/

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


--------------
| Jeres tur! |
\------------/

lav increment.


[If i jsx]
import React, { Component } from 'react';
class App extends Component {
    render() {
        return ( <div>Hello World {false ? ' Man!': null}</div> );
    }
}
export default App;





[Render liste af ting]

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





-------------------------
| Mere end en komponent |
\-----------------------/

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






---------
| Props |
\-------/

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




[dele state]
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


[input]
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

todo:
put slides i filer
test alt kode.
løb foredrag igennem.
lav intro slide
 - ide med react
 - fake dom
 - komponenter
 - hvad trigger en rerender
put på github
