
import React, { useEffect ,useState} from 'react'
import { itemSortbreakfast } from '../../FirebaseConfig/FirestoreDB';


export const Breakfast = () =>{
    const [itemsbreakfast, setItems] = useState([]);

    
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortbreakfast();
      console.log('trayendo items', itemsDB)
      setItems(itemsDB)
    }
    fetchData();
  }, []);

  const butonAgregando = () => {
    console.log('agregando al pedido')
  }
  return (
    <div>
    
    <>
          {
            itemsbreakfast.map((item, i) => (
           
        <button key={i} >
           {item.items}
           {item.price} $
            {item.uid}
        </button>
          ))
        }
        </>
        </div>
  )
}
