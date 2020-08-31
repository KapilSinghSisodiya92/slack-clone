import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCEb8ETNMN01AmMOe-ofpr3B7IqwNSQVQU",
    authDomain: "slack-clone-9213c.firebaseapp.com",
    databaseURL: "https://slack-clone-9213c.firebaseio.com",
    projectId: "slack-clone-9213c",
    storageBucket: "slack-clone-9213c.appspot.com",
    messagingSenderId: "478218078842",
    appId: "1:478218078842:web:069b12dc42d3cf0c1249c3",
    measurementId: "G-S2NL2QGXV0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;