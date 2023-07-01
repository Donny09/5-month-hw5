const initialState = {
    counter: 1,
    abc: 1
}
// action - это объект, с обязательным полем type
// {type: 'INCR_COUNTER'}
// {type: 'DECR_COUNTER'}
export const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCR_COUNTER':
            return {...state, counter: state.counter+action.payload}
        case 'DECR_COUNTER':
            return state - 1
        default:
            return state
    }
}

// ACTION CREATOR
export const incrCounter = (payload) => (
    {type: 'INCR_COUNTER', payload: payload}
)


