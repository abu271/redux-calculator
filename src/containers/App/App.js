import React, { Component } from 'react'
import './App.css'
import NumberPad from '../../components/buttons/NumberPad/NumberPad'
import Equal from '../../components/buttons/Operators/Equal/Equal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Equal />
        <NumberPad />
      </div>
    )
  }
}

export default App