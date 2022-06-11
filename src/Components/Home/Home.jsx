
import React, { } from 'react'
import './Home.css';
import banner from '../../assets/img/banner.png';
import { Lunch } from '../Items/Lunch';
import { Breakfast } from '../Items/BreakFast';
import { useNavigate } from 'react-router-dom';
import { singOutUser } from '../../FirebaseConfig/authContext';
import swal from 'sweetalert';


export const Home = () => {
  // const {data, loading} = useFirestore()

  // const getDataFunction = () => {
  //    try{
  //     getData(orderItems())
  //   }

  //  } 
  // const buttonCCC = () => {

  // }
  const navigate = useNavigate();

  
//     e.preventDefault();
    
//     .then(() => {
//       const confirmsignOff = window.confirm('Estás seguro de cerrar sesión?');
//      if (confirmsignOff === true) {
//       navigate('/')
//      }
//   })
// }


const handleSinOff = (e) => { 
  e.preventDefault();
  singOutUser()
  swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: ["No", "Sí"]
})
.then((logout) => {
  if (logout) {
    swal({text:"Cerrando sesión con exito", 
      icon: "success",
    });
    navigate('/')
  }
});
}


  const trayendoing = () =>{
    console.log('hola almuerzo')
  }
  // if(loading) return <h1>Cargando Menu Data.....</h1>
  return (
    <div className='container'>
      <div>
        <img className="imgBanner" src={banner} alt="65465" />
        <button type='button' onClick={handleSinOff} className='logout'>Cerrar Cesión</button>
      </div>

      <h1>Tomar pedido</h1>

      <div>
        <label >Nombre cliente</label>
        <input type='text' name='name' />
      </div>
      <div>
        <h2> MENU </h2>
        <button type='button'>Desayuno</button>
        <button type='button' onClick={trayendoing}>Almuerzo</button>
      </div>
      <div className="breakfast">
      <Breakfast />
      </div>
      <div className='lunch'>
       <Lunch/>
      </div>
      <div className='conteinerOrder'>
      
        {/* ------------obtener al hacer click el items ----------*/}
        {/* ------------tener en cuenta los items para sumarlos y no repetirlos ----------*/}
        {/* ------------mostrar el contenido de la orden----------*/}
        {/* ------------eliminar items de a----------*/}
        {/* ------------crear boton que envie la lista a cocina----------*/}
        {/* ------------reiniciar el campo que ya ha sido enviado a concina----------*/}
      </div>
    </div>
  )
} 