const initialState = {
    smurfs: [{
        name: 'Test Data',
        age: 1234,
        height: '53cm',
        id: Date.now()
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}