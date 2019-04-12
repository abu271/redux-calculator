import * as constant from '../actions/constants'
import CalculatorMethods from '../../calculator/CalculatorMethods'

const initialState = {
    value: 'initial state',
    expression: ''
}

const calculator = new CalculatorMethods()

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case constant.ADD:
            return calculator.add()
        case constant.MULTIPLY:
            return calculator.multiply()
        case constant.DIVIDE: 
            return calculator.divide()
        case constant.SUBTRACT:
            return calculator.subtract()
        case constant.INPUT_NUMBER:
            return {...state, value: calculator.getValue()}
        case constant.INPUT_DECIMAL:
            return {...state, value: calculator.inputDecimal()}
        case constant.CLEAR_ALL:
            calculator.clearAll()
            return {...state, value: calculator.getValue()}
        case constant.EQUAL:
            calculator.equals()
            return {...state, value: calculator.getValue()}
        default:
            return state
    }
}

export default rootReducer