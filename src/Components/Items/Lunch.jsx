
import React, { useEffect ,useState, useContext} from 'react'
import { itemSortLuch } from '../../FirebaseConfig/FirestoreDB';
import {cartContext} from '../../Context/CartContext'


export const Lunch = () => {
    const [itemsLunch, setItemsLunch] = useState([]);
    const {addOrder} = useContext(cartContext)

   
   
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortLuch();

      setItemsLunch(itemsDB)
    }
    fetchData();
  }, []);

  const addItemsToCarts = (item) => {
    addOrder(item)
  }

  return (
   <>
      <>
        {itemsLunch.map((item, i) => (
          <div className="items"  key={i}>
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