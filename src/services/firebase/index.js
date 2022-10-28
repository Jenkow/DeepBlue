import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9-FdeiFK1I8LCvVTThXhLzk4Ale4lYdA",
  authDomain: "deep-blue-b1d9c.firebaseapp.com",
  projectId: "deep-blue-b1d9c",
  storageBucket: "deep-blue-b1d9c.appspot.com",
  messagingSenderId: "308616406772",
  appId: "1:308616406772:web:4f2e917915a0c1def620a1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)