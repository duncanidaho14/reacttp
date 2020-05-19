import React, { Component } from 'react'

export default class Radio extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option>Choose...</option>
                        <option value={this.props.question}>{this.props.title}</option>
                        <option value={this.props.question}>{this.props.question}</option>
                        <option value={this.props.question}>{this.props.question}</option>
                    </select>
              
            </div>
        )
    }
}
