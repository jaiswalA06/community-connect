import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCE9aOfZZTnFpN_Xrjjxj_7xOQb1cSTfVw",
  authDomain: "community-connect-483311.firebaseapp.com",
  projectId: "community-connect-483311",
  storageBucket: "community-connect-483311.firebasestorage.app",
  messagingSenderId: "6366202764",
  appId: "1:6366202764:web:a1b8c3fea646adbf4664a9"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
