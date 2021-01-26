import React, {Component} from 'react';

class AjouterRecette extends Component {
    state = {
        nom: '',
        image:'',
        ingredients:'',
        instructions:''
    }

    render() {
        return (
            <div>
                <div className="card">
                    <form onSubmit={this.handleSubmit} className="admin-form ajouter-recette">
                        <input name="nom" value={this.state.nom} onChange={this.handleChange} type="text" placeholder={"Nom de la recette"}/>
                        <input name="image" value={this.state.image} onChange={this.handleChange} type="text" placeholder={"Nom de l'image"}/>
                        <textarea name="ingredients" value={this.state.ingredients} onChange={this.handleChange} rows="3" placeholder={"Liste des ingrédients"}/>
                        <textarea name="instructions" value={this.state.instructions} onChange={this.handleChange} rows="15" placeholder={"Lites des instructions"}/>
                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            </div>
        );
    }

    handleSubmit = event => {
        event.preventDefault()
        const recette = {...this.state}
        this.props.addRecipe(recette)
        Object.keys(recette)
            .forEach(item => {
                recette[item] = ""
            })
        this.setState({...recette})
    };

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name] : value})
    };
}

export default AjouterRecette;