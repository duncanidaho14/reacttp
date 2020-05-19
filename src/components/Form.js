import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Input from './Input'
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
                <hr />
                    <form>
                        <div className="form-group">
                            <Wrapper className="header">
                                {/* <h1>{this.props.Questions}</h1> */}
                                <Questions />
                                <Select/>
                            </Wrapper>
                        </div>
                    </form> 
               </Wrapper>
            </div>
        )
    }
}
