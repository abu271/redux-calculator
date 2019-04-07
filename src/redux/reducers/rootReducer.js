import { CLEAR_ALL, ADD, MULTIPLY, DIVIDE, SUBTRACT, INPUT_NUMBER } from '../actions/constants'

const initialState = {
    value: 'initial state',
    expression: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_ALL:
            return {...state, value:'0'}
        case ADD:
            return {...state, value: 'add'}
        case MULTIPLY:
            return {...state, value: 'multiply'}
        case DIVIDE: 
            return {...state, value: 'divide'}
        case SUBTRACT:
            return {...state, value: 'subtract'}
        case INPUT_NUMBER:
            return {...state, value: 'this would work soon'}
        default:
            return state
    }
}

export default rootReducer