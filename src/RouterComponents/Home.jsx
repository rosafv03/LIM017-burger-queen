
import React, { useEffect ,useState} from 'react'
import './Home.css';
import banner from '../assets/img/banner.png';
import { getData } from '../FirebaseConfig/FirestoreDB';
// import { useFirestore } from '../hooks/FirestoreConfig.js';

export const Home = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const itemsDB = await getData();
      console.log('trayendo items', itemsDB)
      setItems(itemsDB)
    }
    fetchData();

  }, []);

  // const [data, setData] = useState();


  // const {data, loading} = useFirestore()

  // const getDataFunction = () => {
  //    try{
  //     getData(orderItems())
  //   }

  //  } 

  const butonAgregando = () => {
    console.log('agregando al pedido')
  }
  // if(loading) return <h1>Cargando Menu Data.....</h1>
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
      <div className="breackFast">
      </div>
      <div className='lunch'>
      </div>
      <div className='conteinerOrder'>
        <>
          {
            items.map((item) => (
            <div>
          <button key={item.id} onClick={butonAgregando}>
            {item.items}
            {item.price}$
            {item.uid}
          </button>
          </div>
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