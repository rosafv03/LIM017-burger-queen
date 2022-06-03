
import React from 'react'
import { useContext, useState } from 'react'
import {loginUser, userContext} from "../context/authContext"
import './Login.css';


export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const {loginUser}= useContext(userContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
 try{
 await loginUser(email,password)
//  console.log('usuario', email,'logeado', password)
 }catch(error){
   console.log(error.code)
 }
   };

  return (
    <form onSubmit={handleSubmit}>
    <div className="container">
      {/* envia la informacion del formulario a handlerSubmit */}
      
        <label className="form-label">Dirección email</label>
        <input type="email" className="input" placeholder="ingresar email" id="email" onChange={e=>setEmail(e.target.value)} required></input>

      
        <label className="form-label">Contraseña:</label>
        <input type="password" className="input" placeholder="ingresar contraseña" id="password" onChange={e=>setPassword(e.target.value)} required></input>
      
           <p>¿No tienes cuenta?<a href="/register"> Regístrate</a></p>
           <button className='buttonLogin' type="button" onClick={loginUser} >Login</button>
         </div>
        </form>
  )
}
