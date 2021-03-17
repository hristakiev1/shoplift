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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAd = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAd,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.messsage);
    }
  }

  return userRef;
};

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const signInWithEmailAndPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};
