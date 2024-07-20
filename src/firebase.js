import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh3-uBuoOEAT1X0Y2MB-8R5MR76PuzWyU",
  authDomain: "netflix-clone-59998.firebaseapp.com",
  projectId: "netflix-clone-59998",
  storageBucket: "netflix-clone-59998.appspot.com",
  messagingSenderId: "1018406269850",
  appId: "1:1018406269850:web:837d25dcd67937b3fb0023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// User SignUp
const signup = async (name, email, password)=>{
  try {
    const res =await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


// User Login
const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));;
  }
}

// Logout function
const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout};