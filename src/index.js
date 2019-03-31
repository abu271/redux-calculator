import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import firstReducer from './redux/reducers/firstReducer'

const store = createStore(firstReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)