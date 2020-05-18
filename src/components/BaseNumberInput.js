import React, { Component } from 'react'

export default class BaseNumberInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            decimal: 1,
            binaire: 1
        }
    }
    

    xhexadecimal = () => {
        this.setState({ 
            decimal: parseInt(this.state.hexadecimal.value, 16),
            binaire: parseInt(this.state.hexadecimal.value, 16).toString(2)
        })
        
    }

    onChangeBase = () => {

    }    

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                
                    <p><label htmlFor="hexadecimal">Hexadécimal&#160;: </label> 
                    <input type="text" id="hexadecimal" name="hexadecimal"/>
                    <input type="button" name="submit2" value="&#8674;" onClick={this.xhexadecimal}/></p>
                
            </div>
        )
    }
}
