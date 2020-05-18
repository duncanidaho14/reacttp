import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)   
    }
    render() {
        return (
            <div>
                <li>id: {this.props.id} Name : {this.props.name}</li>
            </div>
        )
    }
}
