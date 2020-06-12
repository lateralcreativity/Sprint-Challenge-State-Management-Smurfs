import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Smurf from './Smurf';
import { useEffect } from 'react';


const SmurfContainer = props => {
    const getData = props.getData
    useEffect(() => getData(), [getData])

    return (
        <>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
                )
            })}
        </>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { getData })(SmurfContainer)