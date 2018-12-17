import firebase from "firebase";
import "@firebase/firestore";

// Initialize Firebase

var config = {
  apiKey: "AIzaSyC98ooIOZQS1edOcozL-FrxhticSo3Zpfk",
  authDomain: "fale-mais-project.firebaseapp.com",
  databaseURL: "https://fale-mais-project.firebaseio.com",
  projectId: "fale-mais-project",
  storageBucket: "fale-mais-project.appspot.com",
  messagingSenderId: "137066186344"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
