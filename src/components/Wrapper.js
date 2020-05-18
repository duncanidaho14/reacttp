import React, { Component } from 'react'

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={this.props.color}>
                {this.props.children}
            </div>
        )
    }
}
