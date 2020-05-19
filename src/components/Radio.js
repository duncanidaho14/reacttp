import React, { Component } from 'react'
import Questions from './Questions'

const Radio = props => {
    
    return (
        <div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option>Choose...</option>
                <option value={<Questions />}>{}</option>
                    <option value={props.title}>{props.name}</option>
                    <option value={props.title}>{props.title}</option>
                </select>
            
        </div>
    )
    
}
export default Radio
