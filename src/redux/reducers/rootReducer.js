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
        case MULTIPLY:
            return calculator.multiply()
        case DIVIDE: 
            return calculator.divide()
        case SUBTRACT:
            return calculator.subtract()
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