import React, { Component } from 'react'

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={"wrapper " + this.props.color} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
