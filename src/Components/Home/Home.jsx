
import React, { useState } from 'react'
import './Home.css';
import banner from '../../assets/img/banner.png';
import { Lunch } from '../Items/Lunch';
import { Breakfast } from '../Items/BreakFast';
import { useNavigate } from 'react-router-dom';
import { singOutUser } from '../../FirebaseConfig/authContext';
import swal from 'sweetalert';


export const Home = () => {
  const navigate = useNavigate();
  const [changeState, setTChangeState] = useState(1);

  const toggleTab = (i) => {
    setTChangeState(i);
  };

  const handleCustomerName= (e) => {
    console.log(e.target.value);
  }

const handleSinOff = (e) => { 
  e.preventDefault();
  singOutUser()
  swal({
  title: "Estás seguro de cerrar sesión",
  text: "Si cierras sesión no podrás seguir tomando pedidos",
  icon: "warning",
  buttons: ["No", "Sí"]
})
.then((logout) => {
  if (logout) {
    swal({text:"Cerrando sesión con éxito", 
      icon: "success",
    });
    navigate('/')
  }
});
}

  return (
    <div className='container'>
      <div>
        <img className="imgBanner" src={banner} alt="65465" />
        <button type='button' onClick={handleSinOff} className='logout'>Cerrar Cesión</button>
      </div>

      <h1>Menu</h1>
      <div className='container-tabs'>
      <div className="bloc-tabs">
      <button className={changeState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}> Desayuno</button>
      <button className={changeState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}> Almuerzo</button>
    </div>
    <div className="content-tabs">
      <div className={changeState === 1 ? "content  active-content" : "content"} >
        <Breakfast />
        </div>
      <div className={changeState === 2 ? "content  active-content" : "content"} >
        <Lunch />
      </div>
      </div>
      </div>
      <div className='conteinerOrder'>
        <label htmlFor="nameOrder">Nombre cliente
        <input type='text' name='name' className="nameClient" onChange={handleCustomerName} />
        </label>
        <div className="waiter-order">

        </div>
        <label htmlFor="price-total">TOTAL=
        <textarea className="total-textarea" readOnly></textarea>
        </label>
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