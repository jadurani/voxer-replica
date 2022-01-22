import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBARMImIZBe21dzYP17UpaQSkyn-bSxFHw",
  authDomain: "voxer-replica.firebaseapp.com",
  projectId: "voxer-replica",
  storageBucket: "voxer-replica.appspot.com",
  messagingSenderId: "637834087458",
  appId: "1:637834087458:web:8315df1ed3be7862200e7b",
  measurementId: "G-0QRMPX3DD3"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
