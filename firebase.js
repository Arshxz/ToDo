// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCobBltI9Klhmp5k54Rgjab5eyzudUzt4I",
    authDomain: "to-do-live-arsh.firebaseapp.com",
    projectId: "to-do-live-arsh",
    storageBucket: "to-do-live-arsh.appspot.com",
    messagingSenderId: "169364103296",
    appId: "1:169364103296:web:7cf3126e22acaea64b4665",
    measurementId: "G-L72KPPJFP6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
