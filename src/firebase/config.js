import * as firebase from 'firebase/app'
import 'firebase/storage' // store
import 'firebase/firestore' // BD

const firebaseConfig = {
    apiKey: "AIzaSyAqj4NuvRDORx1oJcp1fKvjArRQ2RpdfYs",
    authDomain: "photogallery-93c01.firebaseapp.com",
    projectId: "photogallery-93c01",
    storageBucket: "photogallery-93c01.appspot.com",
    messagingSenderId: "509980964399",
    appId: "1:509980964399:web:a6f04226c69ae51772f8da"
};

// Initialize Firebase
const fireB = firebase(firebaseConfig);
const projectStorage = firebase.storage() // store
const projectFirestore = firebase.firestore() // BD

export { projectFirestore, projectStorage}