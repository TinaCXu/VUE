import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB75d6PfTVw42rHdD38-dK2DRo3YGQTy5U",
    authDomain: "vue-giggle-chat.firebaseapp.com",
    databaseURL: "https://vue-giggle-chat.firebaseio.com",
    projectId: "vue-giggle-chat",
    storageBucket: "vue-giggle-chat.appspot.com",
    messagingSenderId: "786412536393",
    appId: "1:786412536393:web:a21384629725d1fb8a3598",
    measurementId: "G-K47XDJ32G3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()
