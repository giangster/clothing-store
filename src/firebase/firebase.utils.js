import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAqDKoHLWptuuXwwHwth2dYJiAX8h6EL4E",
  authDomain: "clothing-store-082019.firebaseapp.com",
  databaseURL: "https://clothing-store-082019.firebaseio.com",
  projectId: "clothing-store-082019",
  storageBucket: "",
  messagingSenderId: "937460022374",
  appId: "1:937460022374:web:409509828b188bb4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "email@adress.com",
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
