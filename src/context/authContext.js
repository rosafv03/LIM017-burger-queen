// import { createContext, useContext } from "react";
import { useContext , createContext} from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../FirebaseConfig/firebaseAuth.js";
export const authContext =createContext()

export const useAuth = () =>{
    const context = useContext(authContext)
    if (!context) throw new Error("There is no Auth provider");
    return context
}

export function AuthProvider({ children }) {
    // const user = {
    //     login: true
    // };
    const singUp = (email, password) =>
    //  createUserWithEmailAndPassword(auth ,email ,password);
    
    // const singUp = (email, password);
     console.log(email, password);
    return (<authContext.Provider value={{ singUp }}>{children}</authContext.Provider>
    );
};