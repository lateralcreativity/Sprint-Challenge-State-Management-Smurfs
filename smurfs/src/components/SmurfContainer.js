import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfContainer = props => {
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

export default connect(mapStateToProps, {})(SmurfContainer)