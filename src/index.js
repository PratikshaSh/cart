import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import as firebase from 'firebase';
import  firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxcCHICFpu1V01y5RoSTL-XF0IsRBS-xc",
  authDomain: "cart-820fe.firebaseapp.com",
  projectId: "cart-820fe",
  storageBucket: "cart-820fe.appspot.com",
  messagingSenderId: "707208720961",
  appId: "1:707208720961:web:1675b25f29d595d6be8cc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
