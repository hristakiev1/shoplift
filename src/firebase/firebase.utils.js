import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA1dInAx1a84_IRbrIhajEua-zRpKh3Qrc",
  authDomain: "shoplift-d7109.firebaseapp.com",
  projectId: "shoplift-d7109",
  storageBucket: "shoplift-d7109.appspot.com",
  messagingSenderId: "985268537722",
  appId: "1:985268537722:web:74fb47187726f1051b2ec3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoodle = () => {
  auth.signInWithPopup(provider);
};
