import { signOff } from '../FirebaseConfig/firebaseAuth.js';
import React from 'react'
import './Home.css';
import banner from '../assets/img/banner.png';
import { useFirestore } from '../hooks/FirestoreConfig.js';


export const Home = () => {
  
  const {data, loading} = useFirestore()

  const butonAgregando = () => {
    console.log('agregando al pedido')
  }
if(loading) return <h1>Cargando Menu Data.....</h1>
  return (
    <div className='container'>
      <div>
        <img className="imgBanner" src={banner} alt="65465" />
      </div>

      <h1>Tomar pedido</h1>

      <div>
        <label for='name'>Nombre cliente</label>
        <input type='text' name='name' />
      </div>
      <div>
        <h2>MENU</h2>
        <button type='button'>Desayuno</button>
        <button type='button'>Almuerzo</button>
      </div>
      <div className="breackFast"  >

        <div>
          <div>
            <button><span>Café americano $5</span></button>
          </div>
          <div>
            <button><span >Café con leche $7</span></button>
          </div>
          <div>
            <button><span>Sandwich de jamón y queso $10</span></button>
          </div>
          <div>
            <button><span>Jugo de frutas natural : $7</span></button>
          </div>
        </div>

        <div className='lunch'>
          <div className='burger'>
            <div>
              <button><span> Hamburguesa simple $10 </span></button>
            </div>
            <div>
              <button><span>Hamburguesa doble $15</span></button>
            </div>
            <div>
              <button><span>Papas fritas $5</span></button>
            </div>
            <div>
              <button><span>Aros de cebolla : $5</span></button>
            </div>
            <div>
              <button><span >Agua 500ml : $5</span></button>
            </div>
            <div>
              <button><span>Agua 750ml: $7</span></button>
            </div>
            <div>
              <button><span>Bebida/gaseosa 500ml	 : $7</span></button>
            </div>
            <div>
              <button>
                <span>Bebida/gaseosa 750ml : $10</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='conteinerOrder'>
      <>
        {
          data.map((item) => (
          <button key={item.id} onClick={butonAgregando}>
            {item.items}
            {item.price}$
            {item.uid}
          </button>
          ))
        }
      </>
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