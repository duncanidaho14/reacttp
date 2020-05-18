import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'

const questions = {
    'symfony': {
        title: "Symfony design pattern",
        choices: ['MMV', 'MVC', 'MMVV'],
        response: 1,
        type: "select",
        name: "symfony",
        feedback: 'Symfony est basé sur le pattern MVC'
    },
    'react': {
        title: "React est-il un framework ?",
        choices: ['yes', 'no'],
        response: 1,
        type: "radio",
        name: "react",
        feedback: "React est une librairie"
    },
    'jsx': {
        title: "JSX c'est quoi ?",
        choices: ['JSX est un langage compilé', 'JSX est un sur-ensemble développé par Facebook'],
        response: 1,
        type: "radio",
        name: "jsx",
        feedback: 'JSX est un sur ensemble à JS'
    }
}

export default class Form extends Component {
    constructor(props) {
        super(props)
       
    }
    render() {
        return (
            <div>
               <form>
                    <div class="form-group">
                        <Wrapper>
                            <h1>Question</h1>
                            <Input />
                            <Select>
                                <Radio />
                            </Select>
                        </Wrapper>
                    </div>
               </form> 
            </div>
        )
    }
}
