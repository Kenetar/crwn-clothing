import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDwgd-3O_yg7XaCnu7-aitRDfyTECB-FGE",
    authDomain: "crwn-db-b821a.firebaseapp.com",
    projectId: "crwn-db-b821a",
    storageBucket: "crwn-db-b821a.appspot.com",
    messagingSenderId: "826650975454",
    appId: "1:826650975454:web:ac29b9c461dd2017eb764f",
    measurementId: "G-3MRCMWWY8V"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup (provider);

  export default firebase;
