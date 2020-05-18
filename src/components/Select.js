import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" />
                    {this.props.children}
                </div>
            </div>
        )
    }
}
