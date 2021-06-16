import firebase from 'firebase';
require("@firebase/firestore")
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBMNQO9J7kKXppixvh8L6Ft5ymTpLrT63o",
    authDomain: "newsletter-c4ae1.firebaseapp.com",
    projectId: "newsletter-c4ae1",
    storageBucket: "newsletter-c4ae1.appspot.com",
    messagingSenderId: "478148566738",
    appId: "1:478148566738:web:945de2515842713259970b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
