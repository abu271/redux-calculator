import * as math from 'mathjs'

let currentValue = ''
let register = []
let result = []

const regex = /(?=(\W{2,}))/gm

const multipleOperators = expression => {
        let sub = regex.exec(expression)

        //takeout the operators
        let arr = sub[1].split('')

        let firstOperator = arr.shift()
        let lastOperator = arr.pop()

        let firstDigit = expression[expression.indexOf(firstOperator) - 1]
        let lastDigit = expression[expression.indexOf(lastOperator) + 1]

        // create a new string with the last entered operator
        let newStr = firstDigit + lastOperator + lastDigit
        return newStr
}

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

    subtract() {
        
        register.push(currentValue)
        register.push('-')

        currentValue = ''
    }

    multiply() {
        
        register.push(currentValue)
        register.push('*')

        currentValue = ''
    }

    divide() {
        
        register.push(currentValue)
        register.push('/')

        currentValue = ''
    }

    equals() {
        if(currentValue === '') {
            return
        }


        register.push(currentValue)
        let expression = register.join('')
        console.log('first')
        console.log(expression)

        if (expression == '5++5') {
            expression = '5+5'
            result = math.eval(expression)

            currentValue = result.toString()
            register = []
        }
        
        if (regex.test(expression)) {
            expression = multipleOperators(expression)
            result = math.eval(expression)

            currentValue = result.toString()
            register = []
           
        } else {
            result = math.eval(expression)

            currentValue = result.toString()
            register = []
        }

        console.log('second', result)
        console.log(expression)
    }

    inputDecimal() {
        if(currentValue.indexOf('.') >= 0) {
            return
        }
        
        if(currentValue === '') {
            currentValue += '0.'
        } else {
            currentValue += '.'
        }
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
        register = []
    }

    getValue() {
        return currentValue
    }
}

export default CalculatorMethods