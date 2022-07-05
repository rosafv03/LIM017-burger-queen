
import React, { useEffect ,useState, useContext} from 'react'
import { itemSortLuch } from '../../FirebaseConfig/FirestoreDB';
// import { useFirestore } from '../hooks/FirestoreConfig.js';
import {cartContext} from '../../Context/CartContext'

/* import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference to the file we want to download
const storage = getStorage();
const starsRef = ref(storage, 'burguer-simple.png');
 */


export const Lunch = () => {
    const [itemsLunch, setItemsLunch] = useState([]);
    const {addOrder} = useContext(cartContext)

   
   
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortLuch();
      // console.log('trayendo items', itemsDB)
      setItemsLunch(itemsDB)
    }
    fetchData();
  }, []);

  const addItemsToCarts = (item) => {
    addOrder(item)
  }

  return (
   <><div>
      <>
        {itemsLunch.map((item, i) => (
          <div key={i}>
            <button className="items-btn" onClick={() => addItemsToCarts(item)}>
            {item.items} {" "}{item.price} $ 
            <img className='img-product' src={item.url} alt='item' width='100px' />
            </button>
          </div>
        ))}
      </>
    </div></>    
  )
}