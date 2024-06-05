import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "****REDACTED****",
    authDomain: "ecommerce-website-85737.firebaseapp.com",
    databaseURL: "https://ecommerce-website-85737-default-rtdb.firebaseio.com/",
    projectId: "ecommerce-website-85737",
    storageBucket: "ecommerce-website-85737.appspot.com",
    messagingSenderId: "893071101658",
    appId: "1:893071101658:web:86210a42d39b20c52f9fe3",
    measurementId: "G-QZ8QDPE6QH"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }