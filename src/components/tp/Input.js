import React from 'react'

const Input = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }

    const inputProps = {
        id: props.name,
        className: "form-control",
        type: props.type ? props.type : "text",
        value: props.value,
        onChange: handleChange,
        required: props.required
    }
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="col-sm control-label">
                {props.name + (props.required ? '*' : '')}
            </label>
            <div className="col-sm">
                <input {...inputProps} />
            </div>
        </div>)
}

export default Input
