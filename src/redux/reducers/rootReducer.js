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
            calculator.add()
            return {...state, expression: calculator.getExpression()}
        case constant.MULTIPLY:
            calculator.multiply()
            return {...state, expression: calculator.getExpression()}
        case constant.DIVIDE: 
            calculator.divide()
            return {...state, expression: calculator.getExpression()}
        case constant.SUBTRACT:
            calculator.subtract()
            return {...state, expression: calculator.getExpression()}
        case constant.INPUT_NUMBER:
            return {...state, value: calculator.getValue()}
        case constant.INPUT_DECIMAL:
            calculator.inputDecimal()
            return { ...state, value: calculator.getValue().toString()}
        case constant.CLEAR_ALL:
            calculator.clearAll()
            return {...state, value: calculator.getValue(), expression: calculator.getExpression()}
        case constant.EQUAL:
            calculator.equals()
            return { ...state, value: calculator.getValue(), expression: calculator.getExpression()}
        default:
            return state
    }
}

export default rootReducer