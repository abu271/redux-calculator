import React, { Component } from 'react'
import './App.css'

import Button from '../../components/Button/Button'
import Display from '../../components/Display/Display'

import { connect } from 'react-redux'
import store from '../../redux/store'
import action from '../../redux/actions/action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display display={this.props.display}/>
        
        <Button id="equals" icon="=" />
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

const mapStateToProps = () => ({
  display: 'it\'s redux baby'
})

export default connect(mapStateToProps)(App)