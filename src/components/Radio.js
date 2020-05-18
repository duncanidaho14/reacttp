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
                        <option value={this.props}>One</option>
                        <option value={this.props}>Two</option>
                        <option value={this.props}>Three</option>
                    </select>
              
            </div>
        )
    }
}
