import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBY9fuHdh-KvA9ed1G4ytHTlltt4VxOfyU",
    authDomain: "fireplan-db6cc.firebaseapp.com",
    databaseURL: "https://fireplan-db6cc.firebaseio.com",
    projectId: "fireplan-db6cc",
    storageBucket: "",
    messagingSenderId: "191857044257",
    appId: "1:191857044257:web:1abad40bcd67001c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  firebase.firestore().settings({
      // timestampInSpapshots: true
  })


  export default firebase