// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBL-qoLONSBQgrXemscykcqUnnMjxG5Ors",
//   authDomain: "acme-735a8.firebaseapp.com",
//   projectId: "acme-735a8",
//   storageBucket: "acme-735a8.appspot.com",
//   messagingSenderId: "94456368206",
//   appId: "1:94456368206:web:15fa3e0ffea253eefac71f",
//   measurementId: "G-PLDDTN87BQ",
// };
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// firebaseConfig.ts

// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore import
import { getStorage } from "firebase/storage"; // Storage import (if needed)

const firebaseConfig = {
  apiKey: "AIzaSyBL-qoLONSBQgrXemscykcqUnnMjxG5Ors",
  authDomain: "acme-735a8.firebaseapp.com",
  projectId: "acme-735a8",
  storageBucket: "acme-735a8.appspot.com",
  messagingSenderId: "94456368206",
  appId: "1:94456368206:web:15fa3e0ffea253eefac71f",
  measurementId: "G-PLDDTN87BQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage (optional, if you're using storage)
const storage = getStorage(app);

// Exporting the Firestore and Storage
export { db, storage };
