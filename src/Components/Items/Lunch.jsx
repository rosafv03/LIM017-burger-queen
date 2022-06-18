
import React, { useEffect ,useState, useContext} from 'react'
import { itemSortLuch } from '../../FirebaseConfig/FirestoreDB';
// import { useFirestore } from '../hooks/FirestoreConfig.js';
import {cartContext} from '../../Hooks/CartContext'


export const Lunch = () => {
    const [itemsLunch, setItemsLunch] = useState([]);
    const {addOrder} = useContext(cartContext)

   
   
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortLuch();
      console.log('trayendo items', itemsDB)
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
            <button onClick={() => addItemsToCarts(item.items)}>
              {item.items}
              <br></br>
              {item.price} $
            </button>
          </div>
        ))}
      </>
    </div></>    
  )
}



// import React, { useEffect, useState, useContext } from 'react'
// import { itemSortLuch } from '../../FirebaseConfig/FirestoreDB';
// // import { useFirestore } from '../hooks/FirestoreConfig.js';
// import { cartContext } from '../../Hooks/CartContext'
// import imgprfoodueba from '../../assets/img/food.jpg';

// export const Lunch = () => {
//   const [itemsLunch, setItemsLunch] = useState([]);
//   const { cart, addOrder } = useContext(cartContext)



//   useEffect(() => {
//     const fetchData = async () => {
//       const itemsDB = await itemSortLuch();
//       console.log('trayendo items', itemsDB)
//       setItemsLunch(itemsDB)
//     }
//     fetchData();
//   }, []);

//   const addItemsToCarts = (item) => {
//     addOrder(item)
//   }
//   const imgItms = (item) => {
//     if (item.items === "Hamburguesa simple") {
//       <img src={imgprfoodueba} alt="logo" />
//     }
//   }
//   return (
//     <><div>
//       <>
//         {itemsLunch.map((item, i) => ( {
  
//           <>
//           <><div>
//             <button key={i} onClick={() => addItemsToCarts(item.items)}>
//               {item.items}
//               <br></br>
//               {item.price} $
//               {imgItms}
//               {item.uid}

//             </button>
//           </div><>

//               })

//               )
//               }</></>
//     </div> 
//     </>
//   )
// }
