import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    onChange() {
        this.onchange();
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <input type="text" onchange="onChange()" />
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    a = "111";
    handleChange() {
        console.log(this.a);
        this.a = "456";
        console.log(this.a);
    }

    render() {
        return (
            <Clock onChange={this.handleChange} />
        )
    }
};