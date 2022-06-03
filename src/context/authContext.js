// import { createContext, useContext } from "react";
import { useState, createContext,  } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../FirebaseConfig/firebaseAuth";

export const userContext =createContext()

 export const AuthProvider = ({ children }) => {
    const [user, setUser] =useState(false);

    // useEffect(() => {
    //     const unsuscribe = onAuthStateChanged(auth,(user)  => {
    //         console.log(user)
    //     })
    //     return () => unsuscribe()
    // }, [])
    // const user = {
    //     login: true
    // };
    const registerUser = (email, password) =>  createUserWithEmailAndPassword(auth ,email ,password);
    
    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
    //  console.log(email, password);
    // }
    // const signOutUser = ()=> signOut(auth)
    return (
    <userContext.Provider value={{ user, setUser,  registerUser, loginUser}}>
    {children}
    </userContext.Provider>
    );
};

export default  AuthProvider;