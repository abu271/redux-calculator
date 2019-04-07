import { CLEAR_ALL, ADD, MULTIPLY, DIVIDE, SUBTRACT, INPUT_NUMBER, EQUAL } from '../actions/constants'
import { calculator } from '../../containers/App/App'

const initialState = {
    value: 'initial state',
    expression: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return calculator.add()
            // return {...state, value: 'add'}
        case MULTIPLY:
            return {...state, value: 'multiply'}
        case DIVIDE: 
            return {...state, value: 'divide'}
        case SUBTRACT:
            return {...state, value: 'subtract'}
        case INPUT_NUMBER:
            return {...state, value: calculator.getValue()}
        case CLEAR_ALL:
            calculator.clearAll()
            return {...state, value: calculator.getValue()}
        case EQUAL:
            calculator.equals()
            return {...state, value: calculator.getValue()}
        default:
            return state
    }
}

export default rootReducer