import React, { Component } from 'react'
import ImageList from './ImageList'
import Arrows from './Arrows'

export default class View extends Component {
    onClick = (event) => {
        const isLeft = event.target.classList.contains("left")
        this.props.handleClick(isLeft)
    }
    render() {
        return (
            <div className="view">
                <Arrows handleClick={this.onClick} />
                <div className="container">
                    <ImageList data={this.props.data} size="full" current={this.props.current} />
                </div>
            </div>
        )
    }
}

