import firebase from 'firebase';
import 'firebase/auth'
import'firebase/database'
import 'firebase/app'



export const firebaseConfig = {
  apiKey: "AIzaSyByoIVrmb0uJThc3cW1om5RQbEYWtUoh4Y",
  authDomain: "spectagram-7006f.firebaseapp.com",
  projectId: "spectagram-7006f",
  storageBucket: "spectagram-7006f.appspot.com",
  messagingSenderId: "335790002714",
  appId: "1:335790002714:web:ebf23e9f7d7a25dcec77a3"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);