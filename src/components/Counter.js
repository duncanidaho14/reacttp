import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState((prevState) => ( { count: prevState.count + 1}))
    }
    decrement() {
        this.setState((prevState) => ( { count: prevState.count > 0 ? prevState.count - 1 : 0}))
    }
    render() {
        return (
            <div>
                <p >{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>Incrémente de 1</button>
                <button onClick={this.decrement.bind(this)}>Décrémente de 1</button>
            </div>
        )
    }
}

