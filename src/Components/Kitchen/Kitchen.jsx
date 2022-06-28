
import React from 'react'
// import { userContext } from '../../FirebaseConfig/authContext';
import Navbar from "../NavBar/NavBar";

/* import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB"; */



export const Kitchen = () => {
  
    // const { user, singOutUser } = useContext(userContext);
    //useEffect(() => { (async() => {await ….})() }, []);



    /* useEffect(() => {
        (async() => {
        const querySnapshot = await getDocs(collection(db, "order"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }, []);} */


    return (
        <Navbar />
)
}