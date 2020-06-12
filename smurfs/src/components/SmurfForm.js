import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions';

const SmurfForm = props => {

    const initialValues = {
        name: '',
        age: '',
        height: ''
    }

    const [formValues, setFormValues] = useState(initialValues);

    const inputHandler = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        props.postData(formValues);
        setFormValues(initialValues);
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="Enter a name"
             value={formValues.name} onChange={inputHandler} />

             <input type="number" name="age" placeholder="Enter age"
             value={formValues.age} onChange={inputHandler} />

             <input type="text" name="height" placeholder="Enter height"
             value={formValues.height} onChange={inputHandler} />

             <button>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { postData })(SmurfForm)