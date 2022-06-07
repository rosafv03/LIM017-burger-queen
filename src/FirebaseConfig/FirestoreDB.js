
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import { firebaseConfig } from './init';

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const itemSortBreackfast = async() => {
    try{
        const refDataQuery =  collection(db, "orderItems")
        const q = query(refDataQuery, where("category", "==", "breackfast"));
        const querySnapshot = await getDocs(q);
        /* const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() })) */
        
        const docs=[]
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id: doc.id})
        })
        return docs;
        /* console.log(docs) */
    }
    catch  (error){
        console.log(error)
    }
}
export const itemSortLuch = async() => {
    try{
        const refDataQuery =  collection(db, "orderItems")
        const q = query(refDataQuery, where("category", "==", "lunch"));
        const querySnapshot = await getDocs(q);
        /* const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() })) */
        
        const docs=[]
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id: doc.id})
        })
        return docs;
        /* console.log(docs) */
    }
    catch  (error){
        console.log(error)
    }
}
// }
// export const getData = async() => {
//             try{
  
//                 const querySnapshot = await getDocs(collection(db, "orderItems"));
//                 /* const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() })) */
                
//                 const docs=[]
//                 querySnapshot.forEach((doc)=>{
//                     docs.push({...doc.data(),id: doc.id})
//                 })
//                 return docs;
//                 /* console.log(docs) */
//             }
//             catch  (error){
//                 console.log(error)
//             }
     
//     }
// export const getDataCategory =() => {
//     const getDataCategory = query(collection(db, "orderItems"), where("category", "==", "lunch"));
//     const querySnapshot = await getDocs(getDataCategory);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());

