import React from 'react'
const Form = (props) => {

    let style = {};
    if (props.disabled === true) {
        style = {
            pointerEvents: 'none'
        }
    }
    return (
        <form className={props.className}>
            <div className="content" style={style}>
                {props.children}
            </div>
            {
                props.showButton && <div className="btn-group container-fluid p-5" role="group">
                    <button className="btn btn-secondary" type="reset" value="reset" onClick={props.onReset}>Recommencer</button>
                </div>
            }
        </form>
    )
}
export default Form
