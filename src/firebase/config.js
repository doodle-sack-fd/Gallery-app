import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqj4NuvRDORx1oJcp1fKvjArRQ2RpdfYs",
    authDomain: "photogallery-93c01.firebaseapp.com",
    projectId: "photogallery-93c01",
    storageBucket: "photogallery-93c01.appspot.com",
    messagingSenderId: "509980964399",
    appId: "1:509980964399:web:a6f04226c69ae51772f8da"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore() // BD
const timeStamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, projectStorage, timeStamp}