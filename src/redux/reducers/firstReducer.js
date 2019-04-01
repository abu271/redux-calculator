import { HELLO } from '../../redux/constants'

const initialState = {display: 'inital state'}

const firstReducer = (state = initialState, action) => {
    switch(action.type) {
        case HELLO:
            return Object.assign({}, state, {display:'reducer is running'})
        default:
            return state
    }
}

export default firstReducer