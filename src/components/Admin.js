import React, {Component} from 'react';
import AjouterRecette from "./AjouterRecette";

class Admin extends Component {
    render() {
        return (
            <div className="cards">
                <AjouterRecette
                    addRecipe={this.props.addRecipe}/>
                <footer>
                    <button onClick={this.props.loadExample}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;