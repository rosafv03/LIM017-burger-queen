import React, { useEffect, useState } from "react";
// import { userContext } from '../../FirebaseConfig/authContext';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB";
import Navbar from "../../Components/NavBar/NavBar";

export const Kitchen = () => {
  // const { user, singOutUser } = useContext(userContext);
  //useEffect(() => { (async() => {await ….})() }, []);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "order"));
      querySnapshot.forEach((doc) => {
        const dataOrder = doc.data();
        setOrders(dataOrder);
        console.log(dataOrder);
        // doc.data() is never undefined for query doc snapshots
        
      });
    };
    fetchData();
  }, [ ]);
  console.log(orders);
  // /* useEffect(() => {
  //     (async() => {
  //     const querySnapshot = await getDocs(collection(db, "order"));
  //     querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //     });
  // }, []);} */

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
              <span> Pedidos</span>
              {/* <ul>
                    {order.map((order, index) => (
                      <li key={index}>
                        {order.mesa}
                      </li>
                    ))}
                  </ul> */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
