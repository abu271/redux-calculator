import hello from '../actions/action'

const initialState = ''

const firstReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HELLO':
            return state = 'Redux is here'
        default:
            return state
    }
}

export default firstReducer