import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAqDKoHLWptuuXwwHwth2dYJiAX8h6EL4E",
  authDomain: "clothing-store-082019.firebaseapp.com",
  databaseURL: "https://clothing-store-082019.firebaseio.com",
  projectId: "clothing-store-082019",
  storageBucket: "",
  messagingSenderId: "937460022374",
  appId: "1:937460022374:web:409509828b188bb4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdOn = new Date();

    try {
      await userRef.set(displayName, email, createdOn, ...additionalData);
    } catch (error) {
      console.log("error creating user", error.message);
    }

    return userRef;
  }
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
