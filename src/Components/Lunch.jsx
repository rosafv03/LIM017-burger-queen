
import React, { useEffect ,useState} from 'react'
import { itemSortLuch } from '../FirebaseConfig/FirestoreDB';
// import { useFirestore } from '../hooks/FirestoreConfig.js';


export const Lunch = () => {
    const [itemsLunch, setItemsLunch] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortLuch();
      console.log('trayendo items', itemsDB)
      setItemsLunch(itemsDB)
    }
    fetchData();
  }, []);
  
  const butonAgregando = () => {
    console.log('agregando al pedido')
  }
  return (
   <div>Lunch
        <>
          {
            itemsLunch.map((item) => (
           <div>
        <button key={item.id} onClick={butonAgregando}>
           {item.items}
           {item.price} $
            {item.uid}
        </button>
          </div>
          ))
        }
        </>
   </div>
  )
}
