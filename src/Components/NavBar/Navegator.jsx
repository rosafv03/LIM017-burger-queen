import React from 'react'
import { singOutUser } from '../../FirebaseConfig/authContext';
import swal from 'sweetalert';
import { useNavigate,  } from 'react-router-dom';

function Navegator() {
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
    <nav className="navbar bg-light">
  <form className="container-fluid justify-content-start">
    <button className="btn btn-outline-success me-2" type="button">Cocina</button>
    <button className="btn btn-sm btn-outline-secondary" type="button">Mesero</button>
    <button type='button' onClick={handleSinOff} className='logout'>Cerrar Cesión</button>
  </form>
</nav>
  )
}

export default Navegator