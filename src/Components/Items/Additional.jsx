import React, { useEffect, useState, useContext } from 'react'
import { itemSortAdditional } from '../../FirebaseConfig/FirestoreDB';
import { cartContext } from '../../Hooks/CartContext';


export const Additional = () => {
    const [itemsAdditional, setItems] = useState([]);

    const { addOrder } = useContext(cartContext)

    useEffect(() => {
        const fetchData = async () => {
          const itemsDB = await itemSortAdditional();
          console.log('trayendo items', itemsDB)
          setItems(itemsDB)
        }
        fetchData();
      }, []);
    
      const addItemsToCarts = (item) => {
        addOrder(item)
      }
  return (

    <><div>

      <>
        {itemsAdditional.map((item, i) => (
          <button key={i} onClick={() => addItemsToCarts(item)}>
            {item.items}
            <br></br>
            {item.price} $
          </button>
        ))}
      </>

    </div>
    </>
  )
}