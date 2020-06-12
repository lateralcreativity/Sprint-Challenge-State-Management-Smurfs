import React from 'react';

const Smurf = props => {
    return (
        <>
            <hr/>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </>
    )
}

export default Smurf