import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAPY6OwHfdDw1yXHXG6bDUQ1PZ15GQ2X0w",
    authDomain: "vue-house-of-smoothies.firebaseapp.com",
    databaseURL: "https://vue-house-of-smoothies.firebaseio.com",
    projectId: "vue-house-of-smoothies",
    storageBucket: "vue-house-of-smoothies.appspot.com",
    messagingSenderId: "435932181044",
    appId: "1:435932181044:web:3b8d3c1866e4770d4f9061",
    measurementId: "G-V905MJD81L"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();
//   export firestore database, then we can import database to other vue
export default firebaseApp.firestore()