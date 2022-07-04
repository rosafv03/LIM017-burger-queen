import React, { useEffect, useState  } from "react";
// import { userContext } from '../../FirebaseConfig/authContext';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB";
import Navbar from "../../Components/NavBar/NavBar";
// import { cartContext } from "../../Context/CartContext";
/* import "./kitchen.css"; */
export const Kitchen = () => {
  // const { user, singOutUser } = useContext(userContext);
  //useEffect(() => { (async() => {await ….})() }, []);
  // const {order, setOrder} = useContext(cartContext);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      let array=[];
      const querySnapshot = await getDocs(collection(db, "order"));
      querySnapshot.forEach((doc) => {
        const dataOrder = {...doc.data()};
        //  dataOrder.pedido=doc.id;
        array.push(dataOrder)

      /*   setOrders(dataOrder);
        array+=[dataOrder.customer] */
        //setOrders(array);
       // console.log(dataOrder);
        //console.log(array);
        // doc.data() is never undefined for query doc snapshots
        // console.log(array);
        setOrders(array);
       
      });
      return array; 
    };
    fetchData();
  }, []);
 
  



  // useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "order"));
  //     querySnapshot.forEach((doc) => {
  //       const dataOrder = doc.data();
  //       setOrders(dataOrder);
  //       console.log(dataOrder);
  //     });
  //   };
  //   fetchData();
  // }, []);
  // console.log(orders.customer);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="colum1">
              {" "}
              <Navbar />
            </td>
            <td>
              <div className="targetOrder"> Pedidos<br></br>
                {console.log(orders)}
                {orders.map((item, i) => (
          <div key={i}>
          <button className="items-btn" >
                      Mesa: {item.mesa} <br></br>
                      Cliente: {item.customer}<br></br>
                      Estado del pedido:{item.status}
                      {console.log(item.pedido)}
                      
                    </button>
                    {item.pedido?.map((pedido, i) => (
                        <ul key={i} >
                          <li> {pedido.items}</li>
                        </ul>
                      ))}
                   
                    </div>                      ))}

              

              </div>
              {/* <ul>
                {orders.map((dataOrder, index) => (
                  <li key={index}>{dataOrder.customer}</li>
                ))}
              </ul> */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};