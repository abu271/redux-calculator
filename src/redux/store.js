import { createStore, applyMiddleware, compose } from 'redux'
import firstReducer from './reducers/firstReducer'


const store = createStore(firstReducer)

export default store