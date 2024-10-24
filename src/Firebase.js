import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDJYLs2KCiOiU791Z5VIDf39WPbDeYHUHo",
  authDomain: "netflix-clone-c4026.firebaseapp.com",
  projectId: "netflix-clone-c4026",
  storageBucket: "netflix-clone-c4026.appspot.com",
  messagingSenderId: "701478374895",
  appId: "1:701478374895:web:3fb12d5f92ba6d3e173a1a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password)=>{ 
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), { 
        uid: user.uid,
        name,
        EmailAuthProvider: "local",
        email,
       })
    } catch (error) {
        
    }

}

const login = async(email, password) =>{ 
    try {
      await  signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert("error");
    }
}

const logout = () =>{ 
    signOut(auth);
}

export {auth, db, login, signup, signout}