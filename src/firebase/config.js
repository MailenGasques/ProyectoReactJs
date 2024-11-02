import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAsh5VUEeQ--D5YH9-K1C-Gtw6QeuCUdFw",
    authDomain: "ecommerce-filoart.firebaseapp.com",
    projectId: "ecommerce-filoart",
    storageBucket: "ecommerce-filoart.appspot.com",
    messagingSenderId: "59081831283",
    appId: "1:59081831283:web:cd680c4321740e59ebcb06"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)