
import React, { } from 'react'
import './Home.css';
import banner from '../assets/img/banner.png';
import { Lunch } from './Lunch';
import { BreackFast } from './BreackFast';

export const Home = () => {

 

  // const [data, setData] = useState();


  // const {data, loading} = useFirestore()

  // const getDataFunction = () => {
  //    try{
  //     getData(orderItems())
  //   }

  //  } 
  // const buttonCCC = () => {

  // }
  const trayendoing = () =>{
    console.log('hola almuerzo')
  }
  // if(loading) return <h1>Cargando Menu Data.....</h1>
  return (
    <div className='container'>
      <div>
        <img className="imgBanner" src={banner} alt="65465" />
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
      <div className="breackFast">
      <BreackFast />
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