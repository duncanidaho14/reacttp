import React, { Component } from 'react'


export default class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date().toLocaleTimeString(),
            count: 0,
            disabled: 'disabled', 
            active: false
        }
        this.timer = null;
    }
    

    start = () => {
        console.log("start");
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + this.props.step,
                active: true
            })
        }, this.props.time);
    }

    stop = () => {
        console.log("stop")
        clearInterval(this.timer)
        this.setState({active: false})
    }
    reset = () => {
        clearInterval(this.timer)
        this.setState({
            active: false,
            count: 0
        })
    }

    disabled = (event) => {
        event.preventDefault()
        {this.setState({ disabled: 'disabled' })}
    }
    render() {
        return (
            <div>
                <button disabled={this.state.active} onClick={this.start}> Start + {this.props.step}</button>
                <button disabled={this.state.active} onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
    
