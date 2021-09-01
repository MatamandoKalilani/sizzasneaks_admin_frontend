import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage'; 

//Firebase Configuration Details
const firebaseConfig = {
  apiKey: "AIzaSyC93DVOcFvAhxDrcivdomIHf8cK86z_txI",
  authDomain: "sizasana-ecommerce-admin.firebaseapp.com",
  projectId: "sizasana-ecommerce-admin",
  storageBucket: "sizasana-ecommerce-admin.appspot.com",
  messagingSenderId: "687970957165",
  appId: "1:687970957165:web:5ce246aae4b4b77a9bcc64",
};

// Initializing firebase with the firebase details.
firebase.initializeApp(firebaseConfig);

export default firebase;
