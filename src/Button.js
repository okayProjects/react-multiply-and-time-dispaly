import React from 'react';

const button = (props) => {
    return (
        <button onClick={props.change}>{props.active ? 'WYłĄCZ' : 'WŁĄCZ'}</button>
    )

}

export default button;