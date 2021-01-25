import React, {Component} from 'react'
// CSS
import './App.css'

import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";
import Card from "./components/Card";

import base from "./base";

class App extends Component {
    state = {
        pseudo: this.props.match.params.pseudo,
        recettes: {}
    }


    componentDidMount() {
        this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
            context: this,
            state: 'recettes'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    render() {
        const cards = Object.keys(this.state.recettes)
            .map(key =>
                <Card
                    key={key}
                    details={this.state.recettes[key]}/>
            )
        return (
            <div className='box'>
                <Header pseudo={this.state.pseudo}/>
                <div className="cards">
                    <div className="card">
                        {cards}
                    </div>
                </div>
                <Admin
                    deleteRecipe={this.deleteRecipe}
                    recettes={this.state.recettes}
                    updateRecipe={this.updateRecipe}
                    addRecipe={this.addRecipe}
                    loadExample={this.loadExample}/>
            </div>
        )
    }

    loadExample = () => {
        this.setState({recettes})
    };

    addRecipe = recette => {
        const recettes = this.state.recettes;
        recettes[`recette-${Date.now()}`] = recette
        this.setState({recettes})
    }

    updateRecipe = (key, newRecipe) => {
        const recettes = { ...this.state.recettes}
        recettes[key] = newRecipe
        this.setState({recettes})
    }

    deleteRecipe = key => {
        const recettes = {...this.state.recettes}
        recettes[key] = null
        this.setState({recettes})
    }

}

export default App
