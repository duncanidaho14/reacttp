import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Questions from './Questions'

export default class Form extends Component {
    constructor(props) {
        super(props)
       
    }
    render() {
        return (
            <div>
                <Wrapper className="app">
                    <form>
                        <div className="form-group">
                            <Wrapper className="header">
                                <h1>{Questions}</h1>
                                
                                <Select>
                                    
                                </Select>
                            </Wrapper>
                        </div>
                    </form> 
               </Wrapper>
            </div>
        )
    }
}
