import { GET_DATA, GET_SUCCESS } from '../actions';

const initialState = {
    smurfs: [{
        name: '',
        age: null,
        height: '',
        id: Date.now()
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state
            }
        case GET_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state
    }
}