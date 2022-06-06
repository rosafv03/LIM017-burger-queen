import {getAuth,signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword,} from 'firebase/auth';
import {app} from "./init"

export const auth = getAuth(app);

export const registerWithEmail = (email, password) => (
    createUserWithEmailAndPassword(auth, email, password));

    
export const signOff = () => signOut(auth);