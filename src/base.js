import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaabszQxOI41f1j2BYp3ORMfCporKmfyU",
  authDomain: "recettes-e9968.firebaseapp.com",
  databaseURL: "https://recettes-e9968-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
