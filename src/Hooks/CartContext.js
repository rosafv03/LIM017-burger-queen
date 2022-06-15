import { createContext, useState } from "react";

export const cartContext = createContext()


function CartContextProvider (props) {

    const [cart, setCart] = useState([])
    const addOrder =(newOrder) => {
   setCart([...cart , newOrder])
    }

  return (
    <cartContext.Provider value={{cart, setCart, addOrder}}>{props.children}</cartContext.Provider>
  )
}

export default CartContextProvider;