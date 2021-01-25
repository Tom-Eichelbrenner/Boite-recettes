import React, {Component} from 'react';
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";

class Admin extends Component {
    render() {
        const {addRecipe, recettes, loadExample, updateRecipe} = this.props
        return (
            <div className="cards">
                <AjouterRecette
                    addRecipe={addRecipe}/>
                {
                    Object.keys(recettes)
                        .map(key =>
                            <AdminForm
                                id={key}
                                key={key}
                                updateRecipe={updateRecipe}
                                recettes={recettes}/>
                        )
                }
                <footer>
                    <button onClick={loadExample}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;