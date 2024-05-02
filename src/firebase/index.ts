import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy2yOBopSVFkmH2oajzsiYZbAwAW3bXKA",
  authDomain: "gym-tracker-eb15b.firebaseapp.com",
  projectId: "gym-tracker-eb15b",
  storageBucket: "gym-tracker-eb15b.appspot.com",
  messagingSenderId: "985574816086",
  appId: "1:985574816086:web:902b3235c99ab4ec0a7ef7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
