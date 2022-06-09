/* eslint-disable no-useless-concat */
// import { registerWithEmail } from "../FirebaseConfig/firebaseAuth.js"
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../context/authContext.js";
// import { Link } from 'react-router-dom';
import { userContext} from "../../FirebaseConfig/authContext"

export const Register = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const {singup} = useAuth()
  const { registerUser } = useContext(userContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(email, password)
      alert('Usuario ' + email + '   registrado correctamente');
      navigate('/home')
      console.log(registerUser)
      console.log('usuario', email, 'registrado', password);
    } catch (error) {
      console.log(error.code);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        {/* envia la informacion del formulario a handlerSubmit */}

        <label className="form-label">Dirección email</label>
        <input type="email" className="input" placeholder="ingresar email" id="email" onChange={e => setEmail(e.target.value)} required></input>


        <label className="form-label">Contraseña:</label>
        <input type="password" className="input" placeholder="ingresar contraseña" id="password" onChange={e => setPassword(e.target.value)} required></input>

        <p>¿Ya tienes cuenta?<a href="/"> Inicia sesión</a></p>
        <button className='buttonRegister' type="submit" >Register</button>
      </div>
    </form>
  )
};