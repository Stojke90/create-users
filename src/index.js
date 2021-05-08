import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD3mgZDf0Ayly4xM5Ghvl6h6MKekQr9XvU",
    authDomain: "cubes2021-b9e1d.firebaseapp.com",
    projectId: "cubes2021-b9e1d",
    storageBucket: "cubes2021-b9e1d.appspot.com",
    messagingSenderId: "62290879505",
    appId: "1:62290879505:web:11bf870722c56fffd1fdb0"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));

