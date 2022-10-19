import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANibE3Z24HmIY5J8vQGGA_ftUx35Wh5RU",
  authDomain: "coderhouse-ecommerce-c4ea5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-c4ea5",
  storageBucket: "coderhouse-ecommerce-c4ea5.appspot.com",
  messagingSenderId: "210784185721",
  appId: "1:210784185721:web:c9323c512ce4638661d3a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
