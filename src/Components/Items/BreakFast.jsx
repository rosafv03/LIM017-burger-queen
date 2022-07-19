import React, { useEffect, useState, useContext } from 'react'
import { itemSortbreakfast } from '../../FirebaseConfig/FirestoreDB';
import { cartContext } from '../../Context/CartContext';


export const Breakfast = () => {

  const [itemsbreakfast, setItems] = useState([]);
  
  const { addOrder } = useContext(cartContext)


  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortbreakfast();
       console.log('trayendo items', itemsDB)
      setItems(itemsDB)
    }
    fetchData();
    
  }, []);
  console.log(itemsbreakfast);
  
  const addItemsToCarts = (item) => {
    addOrder(item)
  }
  return (
    <>

      <>
        {itemsbreakfast.map((item, i) => (
          <div className="items" key={i}>
            <button className="items-btn" onClick={() => addItemsToCarts(item)}>
            <img className='img-product' src={item.url} alt='item' width='100px' />
            
            {item.items} {" "}{item.price} $
            
          </button>
          </div>
        ))}
      </>

   
    </>
  )
}
