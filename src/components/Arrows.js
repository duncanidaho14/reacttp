import React, { Component } from 'react'

export default class Arrows extends Component {
    render() {
        return (
            <div className="arrows">
                <button className="arrow left" onClick={this.props.handleClick}></button>
                <button className="arrow right" onClick={this.props.handleClick}></button>
            </div>
        )
    }
}
