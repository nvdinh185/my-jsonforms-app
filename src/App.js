import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <input type="text" onChange={() => this.props.onChange()} />
                <button onClick={() => this.props.onClickMe()}>click me!</button>
                <button onClick={() => this.props.onClickMeToo()}>click me too!</button>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
};

let test = {
    date: Date.now()
}
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: test.date };
    }

    handleChange(data) {
        // console.log(data);
        this.setState({ date: Date.now() });
        // this.state.date = Date.now();
        // console.log(test);
    }

    clickMe = (date) => {
        console.log(test);
        console.log(date);
    }

    clickMeToo = (date) => {
        console.log(test);
        test.date = Date.now();
        console.log(test);
        console.log(date);
    }

    render() {
        return (
            <Clock name={this.state.date} onClickMeToo={this.clickMeToo} onClickMe={() => this.clickMe(test.date)}
                onChange={this.handleChange} />
        )
    }
};