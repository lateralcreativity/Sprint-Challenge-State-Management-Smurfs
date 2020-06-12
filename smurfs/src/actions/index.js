import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const GET_SUCCESS = 'GET_SUCCESS';

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log(res)
        dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => console.log('Error', err))
}