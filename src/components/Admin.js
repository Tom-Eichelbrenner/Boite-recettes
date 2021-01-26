import React, {Component} from 'react';
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";
import 'firebase/auth'
import base, {firebaseApp} from "../base";
import Login from "./login";
import firebase from "firebase/app";

class Admin extends Component {

    state = {
        uid: null,
        chef: null
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.handleAuth({user})
            }
        })
    }


    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()

        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    logout = async () => {
        await firebase.auth().signOut()
        this.setState({uid: null})
    }

    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo, {context: this})

        if (!box.chef) {
            await base.post(`${this.props.pseudo}/chef`, {
                data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    };

    render() {
        const {deleteRecipe,addRecipe, recettes, loadExample, updateRecipe} = this.props

        const logout = <button onClick={this.logout}>Déconnexion</button>

        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}/>
        }

        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>Tu n'es pas le chef de cette boite ! </p>
                    {logout}
                </div>
            )
        }

        return (
            <div className="cards">
                <AjouterRecette
                    addRecipe={addRecipe}/>
                {
                    Object.keys(recettes)
                        .map(key =>
                            <AdminForm
                                deleteRecipe={deleteRecipe}
                                id={key}
                                key={key}
                                updateRecipe={updateRecipe}
                                recettes={recettes}/>
                        )
                }
                <footer>
                    <button onClick={loadExample}>Remplir</button>
                    {logout}
                </footer>
            </div>
        );
    }
}

export default Admin;