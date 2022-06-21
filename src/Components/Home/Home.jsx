
import React, { useState , useContext, useEffect} from 'react'
import './Home.css';
import banner from '../../assets/img/banner.png';
import { Lunch } from '../Items/Lunch';
import { Breakfast } from '../Items/BreakFast';
import {cartContext} from '../../Hooks/CartContext'
import Navegator from '../NavBar/Navegator';
import { Additional } from './../Items/Additional';


export const Home = () => {
  // const navigate = useNavigate();
  const [changeState, setTChangeState] = useState(1);
  
  const [total, setTotal] = useState(0)

  const {cart, setCart} = useContext(cartContext);


  useEffect(()=> {
    const reduceNewO = cart.reduce((acumulador, item) => {
      return acumulador += item.price;
    }, 0)
    setTotal(reduceNewO)
  }, [cart, total]);

  
  // console.log(cart)

  function toggleTab(i) {
    setTChangeState(i);
  }

  const handleCustomerName= (e) => {
    console.log(e.target.value);
  }
  //Eliminar productos
  const handleDelete =(uid) => { 
    console.log("borrando")
    const itemsCart = cart.filter(item => item.uid !== uid)
    setCart(itemsCart)
  }



  return (
    <div className='container-home '>
    <Navegator />
      <div>
        <img className="imgBanner" src={banner} alt="65465" />
       
      </div>

      <h1>Menu</h1>
      <div className='container-tabs'>
      <div className="bloc-tabs">
      <button className={changeState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}> Desayuno</button>
      <button className={changeState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}> Almuerzo</button>
      <button className={changeState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}> Adicional</button>
    </div>
    <div className="content-tabs">
      <div className={changeState === 1 ? "content  active-content" : "content"} >
        <Breakfast />
        </div>
      <div className={changeState === 2 ? "content  active-content" : "content"} >
        <Lunch />
      </div>
      <div className={changeState === 3 ? "content  active-content" : "content"} >
        <Additional />
      </div>
      </div>
      </div>
      <div className='conteinerOrder' >
        <label htmlFor="nameOrder">Nombre cliente
        <input type='text' name='name' className="nameClient" onChange={handleCustomerName} />
        </label>
        <div className="waiter-order">
        <ul>
          {(cart || {}).map((item, index) => (
            <li key={index}> {item.items} {item.price} <button className="delete-items" onClick={()=>handleDelete(item.uid)} >x</button> </li>
          ))}
        </ul>
        </div>
        <label htmlFor="price-total">TOTAL=
        <textarea className="total-textarea" value={total} readOnly></textarea>
        </label>
        <button className="sendOrder"> Enviar Orden</button>
      </div>
      
        {/* ------------obtener al hacer click el items ----------*/}
        {/* ------------tener en cuenta los items para sumarlos y no repetirlos ----------*/}
        {/* ------------mostrar el contenido de la orden----------*/}
        {/* ------------eliminar items de a----------*/}
        {/* ------------crear boton que envie la lista a cocina----------*/}
        {/* ------------reiniciar el campo que ya ha sido enviado a concina----------*/}
      
    </div>
  )
} 