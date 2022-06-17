
import React, { useEffect ,useState, useContext} from 'react'
import { itemSortbreakfast } from '../../FirebaseConfig/FirestoreDB';
import {cartContext} from '../../Hooks/CartContext';


export const Breakfast = (props) =>{
    const [itemsbreakfast, setItems] = useState([]);

    const {cart , addOrder} = useContext(cartContext)

   
    const elemento =
    <div> <h1> Carrito</h1>
    <li>{cart}</li>
    </div>;

  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortbreakfast();
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
        {itemsbreakfast.map((item, i) => (
          <button key={i} onClick={() => addItemsToCarts(item.items)}>
            {item.items}
            <br></br>
            {item.price} $
          </button>
        ))}
      </>

    </div><>
        {elemento}
      </></>
  )
}
