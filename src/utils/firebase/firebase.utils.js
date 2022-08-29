import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqPSYAtAffZrbAkFaaHXDoG8emv8fF974",
  authDomain: "e-commerce-website-9a0ac.firebaseapp.com",
  projectId: "e-commerce-website-9a0ac",
  storageBucket: "e-commerce-website-9a0ac.appspot.com",
  messagingSenderId: "70003043293",
  appId: "1:70003043293:web:79e31f830ca1ddd059a434",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const dp = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(dp, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  
  return userDocRef;

  // return
};
