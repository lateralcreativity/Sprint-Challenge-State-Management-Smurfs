import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const GET_SUCCESS = 'GET_SUCCESS';
export const POST_DATA = 'POST_DATA';

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log(res)
        dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => console.log('Error getting data', err))
}

export const postData = data => dispatch => {
    axios.post(`http://localhost:3333/smurfs`, data)
    .then(res => dispatch({ type: POST_DATA, payload: res.data}))
    .catch(err => console.log('Error posting data', err))
}