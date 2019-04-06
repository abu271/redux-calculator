import React, { Component } from 'react'
import './App.css'

import Button from '../../components/Button/Button'
import Display from '../../components/Display/Display'

import { connect } from 'react-redux'
import { CLEAR_ALL, ADD, MULTIPLY, DIVIDE, SUBTRACT } from '../../redux/constants'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display display={ this.props.value }/>
        <Button id="equals" icon="=" />
        <Button id="decimal" icon="." />
        <Button func={ this.props.onClickClear } id="clear" icon="AC" />

        <Button func={ this.props.onClickAdd } id="add" icon="+" />
        <Button func={ this.props.onClickSubtract } id="subtract" icon="-" />
        <Button func={ this.props.onClickMultiply } id="multiply" icon="x" />
        <Button func={ this.props.onClickDivide } id="divide" icon="/" />

        <Button id="zero" icon="0" />
        <Button id="one" icon="1" />
        <Button id="two" icon="2" />
        <Button id="three" icon="3" />
        <Button id="four" icon="4" />
        <Button id="five" icon="5" />
        <Button id="six" icon="6" />
        <Button id="seven" icon="7" />
        <Button id="eight" icon="8" />
        <Button id="nine" icon="9" />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClickClear: () => dispatch({ type: CLEAR_ALL }),
  onClickAdd: () => dispatch({ type: ADD }),
  onClickSubtract: () => dispatch({ type: SUBTRACT }),
  onClickMultiply: () => dispatch({ type: MULTIPLY }),
  onClickDivide: () => dispatch({ type:DIVIDE })
})

const mapStateToProps = (state) => ({
  value: state.value
})

export default connect(mapStateToProps, mapDispatchToProps)(App)