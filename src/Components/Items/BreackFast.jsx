
import React, { useEffect ,useState} from 'react'
import { itemSortBreackfast } from '../../FirebaseConfig/FirestoreDB';


export const BreackFast = () =>{
    const [itemsBreackfast, setItems] = useState([]);

    
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortBreackfast();
      console.log('trayendo items', itemsDB)
      setItems(itemsDB)
    }
    fetchData();
  }, []);

  const butonAgregando = () => {
    console.log('agregando al pedido')
  }
  return (
    <div>BreackFast
    
    <>
          {
            itemsBreackfast.map((item) => (
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
