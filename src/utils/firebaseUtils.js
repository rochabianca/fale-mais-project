import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC98ooIOZQS1edOcozL-FrxhticSo3Zpfk',
  authDomain: 'fale-mais-project.firebaseapp.com',
  databaseURL: 'https://fale-mais-project.firebaseio.com',
  projectId: 'fale-mais-project',
  storageBucket: 'fale-mais-project.appspot.com',
  messagingSenderId: '137066186344'
};
firebase.initializeApp(config);

export default firebase;
