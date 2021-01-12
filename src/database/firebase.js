import * as firebase from "firebase";
import "firebase/firestore";

import { FIREBASE_API_KEY } from "../config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "airbnb-clone-a10b6.firebaseapp.com",
  databaseURL: "https://airbnb-clone-a10b6-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-a10b6",
  storageBucket: "airbnb-clone-a10b6.appspot.com",
  messagingSenderId: "627360253040",
  appId: "1:627360253040:web:5a6ab2a5b78b2c445420b5",
};

// Initialize Firebase
if (!firebase.apps.length) {
  console.log("init!");
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default {
  firebase,
  db,
};
