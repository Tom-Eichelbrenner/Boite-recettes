import React, { Component } from 'react'
// CSS
import './App.css'

import Header from "./components/Header";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo
  }

  render () {
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
      </div>
    )
  }
}

export default App
