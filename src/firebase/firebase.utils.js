import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNbkYZU63Q6lInnRA72YSPP2xFEhBygP0",
    authDomain: "crwn-db-64d5f.firebaseapp.com",
    projectId: "crwn-db-64d5f",
    storageBucket: "crwn-db-64d5f.appspot.com",
    messagingSenderId: "618689261796",
    appId: "1:618689261796:web:8d2ed2864610676c917cf1",
    measurementId: "G-V9V0VMSDFP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
