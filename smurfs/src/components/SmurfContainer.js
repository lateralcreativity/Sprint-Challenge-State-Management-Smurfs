import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Smurf from './Smurf';


const SmurfContainer = props => {
    useEffect(() => props.getData(), [])

    return (
        <>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getData })(SmurfContainer)