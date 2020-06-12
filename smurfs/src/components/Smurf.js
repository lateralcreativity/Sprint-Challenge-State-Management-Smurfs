import React from 'react';

const Smurf = ({smurf}) => {
    return (
        <>
            <hr/>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </>
    )
}

export default Smurf