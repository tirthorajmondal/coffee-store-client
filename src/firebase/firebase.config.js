// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4HL1Ykp3MbzocuAkAgFeSPLbkag343p8",
    authDomain: "coffee-store-d86e6.firebaseapp.com",
    projectId: "coffee-store-d86e6",
    storageBucket: "coffee-store-d86e6.firebasestorage.app",
    messagingSenderId: "843659097420",
    appId: "1:843659097420:web:85e2f3b3f18f7f5cbd8be9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;