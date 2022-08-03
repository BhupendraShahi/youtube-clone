import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA_EykJefYlASevYFkUY3qOxwda-HZm-m8",
    authDomain: "clone-6dc76.firebaseapp.com",
    projectId: "clone-6dc76",
    storageBucket: "clone-6dc76.appspot.com",
    messagingSenderId: "556693682242",
    appId: "1:556693682242:web:9233314cf77a60199815db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;