import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9N8L6d18tlE3HseCEm8IaOHW1pZjE5zs",
    authDomain: "demologin-1609598826312.firebaseapp.com",
    projectId: "demologin-1609598826312",
    storageBucket: "demologin-1609598826312.appspot.com",
    messagingSenderId: "530020942553",
    appId: "1:530020942553:web:d15cfdadbe7df2af6674c8",
    measurementId: "G-B71F7XR7LJ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;