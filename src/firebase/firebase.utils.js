import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
apiKey: "AIzaSyBD6pj5UaaFacSqdxstVRgBKFgt-RvMquY",
authDomain: "crwn-react-db-650cd.firebaseapp.com",
projectId: "crwn-react-db-650cd",
storageBucket: "crwn-react-db-650cd.appspot.com",
messagingSenderId: "430779502000",
appId: "1:430779502000:web:12613ee09b5fa46fb71a75",
measurementId: "G-JYJXCKRWCN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;