import React from 'react';

const Task = (props) => {
    return (
        <div>
            {props.task.id } - { props.task.description}
            { props.task.complete ? ' ✅ ' : ' ❌ '}
        </div>
    );
};


export default Task;