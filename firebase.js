// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhG5mO1X-5z2DFMgpoip6p0erYyOZe6Sc",
  authDomain: "hadi-ki-dairay.firebaseapp.com",
  projectId: "hadi-ki-dairay",
  storageBucket: "hadi-ki-dairay.firebasestorage.app",
  messagingSenderId: "821495126488",
  appId: "1:821495126488:web:c60cb90763982b72da3aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
