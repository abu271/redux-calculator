import React, { Component } from 'react'
import './App.css'

import Button from '../../components/Button/Button'
import Display from '../../components/Display/Display'

import { connect } from 'react-redux'
import hello from '../../redux/actions/action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display display={this.props.display}/>
        <Button func={this.props.onDisplayClick} id="equals" icon="=" />
        <Button id="decimal" icon="." />
        <Button id="clear" icon="AC" />

        <Button id="add" icon="+" />
        <Button id="subtract" icon="-" />
        <Button id="multiply" icon="x" />
        <Button id="divide" icon="/" />

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
  onDisplayClick: () => dispatch(hello())
})

const mapStateToProps = (state) => ({
  display: state.display
})

export default connect(mapStateToProps, mapDispatchToProps)(App)