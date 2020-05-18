import React, { Component } from 'react'
import BaseNumberInput from './BaseNumberInput'

export default class MotherNumberInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
           decimal: 1,
           hexadecimal: 1,
           binaire: 1
        }
    }
    xdecimal = () => {
        this.setState({
            hexadecimal: (this.state.decimal.value - 0).toString(16), 
            binaire: (this.state.decimal.value - 0).toString(2)
        })
    }

    xbinaire = () => {
        this.setState({ 
            hexadecimal: parseInt(this.state.binaire.value, 2), 
            binaire: parseInt(this.state.binaire.value, 2).toString(16)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

    }
    handleChange = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <p><label htmlFor="decimal">Décimal&#160;: </label> 
                    <input type="text" id="decimal" name="decimal" />
                        <input type="button" name="submit1" value="&#8674;" onClick={this.xdecimal} /></p>

                    <BaseNumberInput onChangeBase={(e) => this.handleChange(e) } />

                    <p><label htmlFor="binaire">Binaire&#160;: </label> <input type="text" id="binaire" name="binaire" />
                        <input type="button" name="submit3" value="&#8674;" onClick={this.xbinaire} /></p>

                </form>
            </div>
        )
    }
}
