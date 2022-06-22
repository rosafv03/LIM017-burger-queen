import React from 'react'
import './navbar.css';
import { singOutUser } from '../../FirebaseConfig/authContext';
import swal from 'sweetalert';
import { useNavigate,  } from 'react-router-dom';
// import {Kitchen } from '../Kitchen/Kitchen'

function Navbar() {
    const navigate = useNavigate();

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
    <nav className="NavbarItems">
  <ul className="listNavbar">
    <li className="listN" ><a href="#"></a>Cocina 👨‍🍳</li>
    <li className="listN" >Home📑</li>
  </ul>
  <button type='button' onClick={handleSinOff} className='logout'>Cerrar Cesión</button>
</nav>
  )
}

export default Navbar;