import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
// initialize google auth proveider that use to login
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
// get auth
export const auth = getAuth();
// export the function of sign in with google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const dp = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;

  // return
};

export const createAuthUserWithAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
