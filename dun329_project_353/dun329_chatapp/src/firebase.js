import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, update } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwRKEHDmoykSeQJ-moVfFkRwt20d6XO_M",
  authDomain: "chat-app-21d6f.firebaseapp.com",
  projectId: "chat-app-21d6f",
  storageBucket: "chat-app-21d6f.appspot.com",
  messagingSenderId: "800202494477",
  appId: "1:800202494477:web:22fae94a38bbca05cabb44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue,update };
