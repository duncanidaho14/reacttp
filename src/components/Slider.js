import React, { Component, Fragment } from 'react'
import Loader from './Loader'
import View from './View'
import Control from './Control'

export default class Slider extends Component {
    constructor(props){
        super(props)
        this.dataJson = null
        this.state = {
            preLoaded: false,
            current: 0
        }
    }
    
    onLoad = (dataJson) => {
        this.dataJson = dataJson
        this.setState({
            preLoaded: true
        })
    }
    
    onAction = (slideLeft) => {
        if (slideLeft) {
            this.setState({
                current: (this.state.current > 0) ? (this.state.current - 1) : (this.dataJson.images.length - 1) 
            })
        } else {
           
            this.setState({
                current: (this.state.current + 1) % this.dataJson.images.length
            })
            
            
        }
    }

    render() {        
        return (
            <Fragment>
                <div className={"layer " + (this.state.preLoaded ? 'hide' : '')} >
                    <Loader url={this.props.url} onload={this.onLoad} />
                </div>
                <div className="layer content">
                    <View data={this.dataJson} handleClick={this.onAction} current={this.state.current} />
                    <Control data={this.dataJson} handleClick={this.onAction} current={this.state.current}/>
                </div>
            </Fragment>
        )
    }
}
