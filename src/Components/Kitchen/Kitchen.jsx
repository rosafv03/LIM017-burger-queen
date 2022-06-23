
import { useContext,useEffect } from "react"
import { userContext } from '../../FirebaseConfig/authContext';

/* import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB"; */



export const Kitchen = () => {

    const { user, singOutUser } = useContext(userContext);
    //useEffect(() => { (async() => {await ….})() }, []);



    /* useEffect(() => {
        (async() => {
        const querySnapshot = await getDocs(collection(db, "order"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }, []);} */

const hadleClickLogout = async () => {
    try {
        await singOutUser();
        console.log('cerrar sesión', user)
    } catch (error) {
        console.log(error.code)
    }
};
return (

    /*         <table className='table-container-waiter'>
            <tbody> <th className='colum1'><NavBar /></th>
            </tbody>
            </table> */
    <div> <h1>Cocina</h1>
        <button onClick={hadleClickLogout}></button>
    </div>
)
}
