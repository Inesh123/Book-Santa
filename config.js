import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAok3_Ky7LamEjpOnp23QFDjKgXHvvbeTk",
  authDomain: "booksanta-af406.firebaseapp.com",
  databaseURL: "https://booksanta-af406.firebaseio.com",
  projectId: "booksanta-af406",
  storageBucket: "booksanta-af406.appspot.com",
  messagingSenderId: "128615627949",
  appId: "1:128615627949:web:e595ad3b041451164a1a24"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
