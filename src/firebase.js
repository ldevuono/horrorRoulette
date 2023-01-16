// firebase.js
import { initializeApp } from 'firebase/app';

// Initialize Firebase
// Your web app's Firebase configuration

const config = {

    apiKey: "AIzaSyD-p1-XblHgcsLFNTvA23gODGm7LDPMg-c",
    authDomain: "horror-roulette.firebaseapp.com",
    projectId: "horror-roulette",
    storageBucket: "horror-roulette.appspot.com",
    messagingSenderId: "864526548249",
    appId: "1:864526548249:web:e5ca18d6dbb20035851988"
};

// setting a variable that initializes our application
const firebase = initializeApp(config);
// this exports the CONFIGURED version of firebase

export default firebase;