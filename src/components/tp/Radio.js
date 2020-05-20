import React, { Fragment } from 'react'

const Radio = (props) => {

    const onChange = (event) => {
        props.onChange(props.index, event.target.value)
    }

    return (
        <Fragment>
            {
                props.value.map((value, k) => (
                    <div className="form-check" key={k}>
                        <input className="form-check-input" type="radio" name={props.name} value={k} onClick={onChange} />
                        <label className="form-check-label" htmlFor={props.name}>{value}</label>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default Radio
