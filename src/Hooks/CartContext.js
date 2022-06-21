import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartContextProvider(props) {
  //estado del carrito
  const [cart, setCart] = useState([])

  const addOrder = (newOrder) => {
    setCart([...cart, newOrder])
  }
  return (
    <cartContext.Provider value={{ cart, setCart, addOrder }}>{props.children}</cartContext.Provider>
  )
}


// const reduceNewO = cart
//      .map(item => item.price)
//      .reduce((counters, item) => counters + item, 0)
//      console.log(reduceNewO)

// const addOrder =(newOrder) => {
//   let sumItems =0;
//   for( let i=0; i<cart.length; i++){
//     if(newOrder[i] === item){
//       sumItems += newOrder[i];
//       console.log(sumItems);
//     }
//   }
// setCart([...cart , newOrder])
// }