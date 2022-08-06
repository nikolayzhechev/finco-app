// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCEOCpDsNd0ta7KRsRsVe8Y5jEuCdDipCI",
  authDomain: "finco-app-3c312.firebaseapp.com",
  projectId: "finco-app-3c312",
  storageBucket: "finco-app-3c312.appspot.com",
  messagingSenderId: "105345325675",
  appId: "1:105345325675:web:2daa893f586a16663bef2e",
  databaseURL:
    "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

console.log(app);