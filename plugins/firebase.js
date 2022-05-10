import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBnangh4n1rZgYfX6BZnD1ggls6ZgWlghQ",
  authDomain: "nuxt-fire-af941.firebaseapp.com",
  projectId: "nuxt-fire-af941",
  storageBucket: "nuxt-fire-af941.appspot.com",
  messagingSenderId: "521486000923",
  appId: "1:521486000923:web:e9f6f737fdf98b4ba9e9be"
};

  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export {firebase, db, auth, storage}