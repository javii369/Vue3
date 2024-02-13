import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAGFwcDfImXP_BNpoCso5QBhsZH-Z6plNo",
  authDomain: "blog-vue-283ed.firebaseapp.com",
  projectId: "blog-vue-283ed",
  storageBucket: "blog-vue-283ed.appspot.com",
  messagingSenderId: "400001695943",
  appId: "1:400001695943:web:f8157774c39376ce8dbee2",
};

export const firebaseApp = initializeApp(firebaseConfig);
//Authentication
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
