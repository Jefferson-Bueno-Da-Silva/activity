import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqNrIu3Sle02eFJUlwHe-29Aax0d195nA",
  authDomain: "activity-862a1.firebaseapp.com",
  databaseURL: "https://activity-862a1-default-rtdb.firebaseio.com",
  projectId: "activity-862a1",
  storageBucket: "activity-862a1.appspot.com",
  messagingSenderId: "136824602532",
  appId: "1:136824602532:web:ee012d03a767aeece68b31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;