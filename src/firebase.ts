
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaCX2b16Y_heD5PCO86Jtc2Exeq2cCYrs",
  authDomain: "nwitter-reloaded-ccf78.firebaseapp.com",
  projectId: "nwitter-reloaded-ccf78",
  storageBucket: "nwitter-reloaded-ccf78.appspot.com",
  messagingSenderId: "869173585310",
  appId: "1:869173585310:web:6d514260b9f8f79058228f"
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

export const storage=getStorage(app);

export const db=getFirestore(app);
