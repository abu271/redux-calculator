import * as math from 'mathjs'

let currentValue = ''
let register = []
let result = []

console.log(math)
class CalculatorMethods {
    constructor() {
        currentValue = ''
        register = []
        result = []
    }
    
    add() {
        register.push(currentValue)
        register.push('+')

        currentValue = ''
    }

    // subtract
    subtract() {
        register.push(currentValue)
        register.push('-')

        currentValue = ''
    }
    // multiply
    // divide

    equals() {
        if (currentValue === '') {
            return;
        }
        register.push(currentValue)

        const expression = register.join(' ')

        result = math.eval(expression)
        currentValue = result.toString()
        register = []
        console.log(currentValue)
    }


    inputNumber(number) {
        if(currentValue === '0') {
            currentValue = ''
            currentValue += number
        } else {
            currentValue += number
        }
    }

    clearAll() {
        currentValue = '0'
    }

    getValue() {
        return currentValue
    }
}

export default CalculatorMethods