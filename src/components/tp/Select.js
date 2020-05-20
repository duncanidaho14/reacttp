import React from 'react'

const Select = (props) => {

    const onChange = (event) => {
        props.onChange(props.index, event.target.value == -1 ? null : parseInt(event.target.value))
    }

    return (
        <div className="form-group">
            <select onChange={onChange} className="form-control">
                <option value="-1">Sélectionnez une réponse</option>
                {props.value.map((option, k) => (<option key={k} value={k}>{option}</option>))}
            </select></div>)

}

export default Select
