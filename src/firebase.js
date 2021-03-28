import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAvopHSYNnReInKoAwj71iOJ4uJED3NAg",
  authDomain: "sv-you1tube-clone.firebaseapp.com",
  projectId: "sv-you1tube-clone",
  storageBucket: "sv-you1tube-clone.appspot.com",
  messagingSenderId: "138581446268",
  appId: "1:138581446268:web:6e7d0cf0a4d733ee4ac3f9",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
