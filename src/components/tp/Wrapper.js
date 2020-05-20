import React, { Component } from 'react'

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('Wrapper' + this.props);
        
        return (
            <div className={"wrapper " + this.props.color} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
