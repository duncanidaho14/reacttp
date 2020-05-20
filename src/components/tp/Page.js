import React from 'react'
const Page = (props) => {

    if (props.onConstruct) {
        props.onConstruct(props.id);
    }

    return (
        <div id={'p_' + props.id} style={{ display: (props.id === props.current ? 'block' : 'none') }} className={"page " + props.className}>
            {props.children}
        </div>
    )
}

export default Page
