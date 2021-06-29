import firebase from 'firebase/app';
import "firebase/auth";

export const auth =  firebase.initializeApp({
    apiKey: "AIzaSyBtQc97sA2-4Rtu4QWrwFp8jEINF6qfB5g",
    authDomain: "duo-chat-13854.firebaseapp.com",
    projectId: "duo-chat-13854",
    storageBucket: "duo-chat-13854.appspot.com",
    messagingSenderId: "902744451520",
    appId: "1:902744451520:web:a02aed385b3b6ef1f50025"
  }).auth();