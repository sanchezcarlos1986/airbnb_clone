import firebase from "firebase";
import "firebase/firestore";

import { FIREBASE_API_KEY } from "../config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "airbnb-clone-4be1e.firebaseapp.com",
  projectId: "airbnb-clone-4be1e",
  storageBucket: "airbnb-clone-4be1e.appspot.com",
  messagingSenderId: "940995974209",
  appId: "1:940995974209:web:1397e8726d933a1a70e2c0",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default {
  firebase,
  db,
};
