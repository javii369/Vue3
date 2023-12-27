import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_MuxsRr5lHgibOOjBhnH5IdvX9eeUNTw",
  authDomain: "blog-vue-26025.firebaseapp.com",
  projectId: "blog-vue-26025",
  storageBucket: "blog-vue-26025.appspot.com",
  messagingSenderId: "243490547911",
  appId: "1:243490547911:web:9ae8c7638873b47a87b6e2",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
