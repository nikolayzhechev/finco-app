import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCEOCpDsNd0ta7KRsRsVe8Y5jEuCdDipCI",
  authDomain: "finco-app-3c312.firebaseapp.com",
  projectId: "finco-app-3c312",
  storageBucket: "finco-app-3c312.appspot.com",
  messagingSenderId: "105345325675",
  appId: "1:105345325675:web:2daa893f586a16663bef2e",
};

// Initialize Firebase, database, authentication
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);