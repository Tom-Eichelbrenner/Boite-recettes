import React, { Component } from 'react'
// CSS
import './App.css'

import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  render () {
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className="cards">
          <div className="card">
            <h2>Une carte</h2>
          </div>
        </div>
        <Admin
          loadExample={this.loadExample}/>
      </div>
    )
  }

  loadExample = () => {
    this.setState({recettes})
  };
}

export default App
