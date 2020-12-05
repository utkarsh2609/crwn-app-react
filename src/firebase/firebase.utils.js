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

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName, email, createdAt, ...additonalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
