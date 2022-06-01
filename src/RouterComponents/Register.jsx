import { registerWithEmail } from "../FirebaseConfig/firebaseAuth.js"
import React from 'react'

export const Register = () => {
  return (
    <div className="container">
           {/* envia la informacion del formulario a handlerSubmit */}
           <div className="mb-3">
             <label className="form-label">Dirección email</label>
             <input type="email" className="input" placeholder="ingresar email" id="email" required></input>
           </div>

           <div className="mb-3">
             <label className="form-label">Contraseña:</label>
             <input type="password" className="input" placeholder="ingresar contraseña" id="contraseña" required></input>
           </div>
           <p>¿Ya tienes cuenta? <a>Inicia sesión</a></p>
           <button className='buttonRegister' type="button" >Register</button>
         </div>
  )

}