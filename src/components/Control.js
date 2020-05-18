import React, { Component } from 'react'
import ImageList from './ImageList'

export default class Control extends Component {
    render() {
        return (
            <div className="controls">
                <ImageList data={this.props.data} size="thumb" current={this.props.current} />
            </div>
        )
    }
}
