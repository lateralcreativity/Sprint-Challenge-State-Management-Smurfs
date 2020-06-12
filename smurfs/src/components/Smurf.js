import React from 'react';

const Smurf = props => {
    return (
        <>
            <hr/>
            <p>Smurf Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </>
    );
};

export default Smurf