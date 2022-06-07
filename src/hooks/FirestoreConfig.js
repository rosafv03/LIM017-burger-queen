// import {getFirestore, collection, getDocs,} from 'firebase/firestore/lite';
// import { useEffect, useState } from 'react';
// import { app } from '../FirebaseConfig/init';


// export const db = getFirestore(app);

// export const useFirestore = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         getData();
//         console.log(getData)
//     }, []);

//     const getData = async() => {
//         try{
//             setLoading(true)
//             const querySnapshot = await getDocs(collection(db, "orderItems"));
//             const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() }))
//             setData(dataDB)
//         }
//         catch  (error){
//             console.log(error)
//             setError(error.message)
//         }
//         finally{
//             setLoading(false)
//         }
//     }
//     // const addData = async (addData) => { 
//     // const docRef = await addDoc(collection(db, "orderItems"), {
//     //     id: "xxxxxxxxx" ,
//     //     name: "hamburguesa simple",
//     //     price: "$10", 
        
//     //   });
//     // }


//     return{
// data,
// error,
// loading
//     }
// }