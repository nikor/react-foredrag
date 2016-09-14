/**
 * Jeres tur!
 */

//lav todo liste.
































import React from 'react';

var Footer = React.createClass({
    getInitialState() {
        return {
            text: ""
        }
    },
    add() {
        this.props.addItem(this.state.text)
    },
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Nyt todo"
                    value={this.state.text}
                    ref="text"
                    onChange={() => this.setState({text: this.refs.text.value})}
                />
                <div onClick={() => this.add()}>Go! </div>
            </div>
        )
    }
})

var Item = React.createClass({
    render() {
        return (
            <li onClick={() => this.props.changeDone()}>
                {this.props.item.done ? '✓ ':'✘ '} {this.props.item.text}
            </li>
        )
    }
})

var List = React.createClass({
    render() {
        return (
            <ul>
                {this.props.list.map(e => (
                    <Item key={e.index} changeDone={() => this.props.changeDone(e.index)} item={e} />)
                )}
            </ul>
        )
    }
});

var Header = React.createClass({
    render() {
        return (
            <div>
                <div onClick={() => this.props.changeShowDone()}>
                    {this.props.showDone ? '✓ ':'✘ '} Vis done
                </div>
                <input
                  type="text"
                  placeholder="Søg"
                  value={this.props.text}
                  ref="search"
                  onChange={() => this.props.changeText(this.refs.search.value)}
                />
            </div>
        )
    }
});

var App = React.createClass({
    getInitialState() {
        return {
            list: [
                {text: 'first', done: false},
                {text: 'second', done: false}
            ],
            showDone: false,
            searchString: ""
        }
    },
    changeDone(i) {
        var l = this.state.list;
        if (0 <= i && i < l.length) {
            l[i].done = !l[i].done;
            this.setState({list: l})
        }
    },
    changeShowDone() {
        this.setState({showDone: !this.state.showDone})
    },
    changeText(t) {
        this.setState({searchString: t})
    },
    addItem(t) {
        var l = this.state.list
        l.push({text: t, done: false})
        this.setState({list: l})
    },
    render() {
        var list = this.state.list.map((e,i) => {e.index = i; return e})
        if (! this.state.showDone) {
            list = list.filter(e => ! e.done)
        }
        if (this.state.searchString) {
            list = list.filter(e => e.text.indexOf(this.state.searchString) >= 0)
        }
       
        return (
            <div>
                <List changeDone={i => this.changeDone(i)} list={list} />
                <Header
                    text={this.state.searchString}
                    changeText={t => this.changeText(t)}
                    showDone={this.state.showDone}
                    changeShowDone={() => this.changeShowDone()}
                />
                <Footer addItem={i => this.addItem(i)} />
            </div>
       );
    }
});

export default App;
