import { registerWithEmail } from "../FirebaseConfig/firebaseAuth.js"
import { useState } from 'react'
import { useAuth } from "../context/authContext.js";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {singUp} = useAuth()

  const handleChange = ({ target: { name, value } }) =>
   setUser({ ...user, [name]: value });
  // console.log(name, value );

  const handleSubmit = e => {
    e.preventDefault()
    singUp(user.email, user.password)
  //   e.preventDefault();
  //   try {
  //     await singUp(user.email, user.password);
  //     alert('registrado')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        {/* envia la informacion del formulario a handlerSubmit */}
        <div className="mb-3">
          <label className="form-label">Dirección email</label>
          <input type="email" className="input" placeholder="ingresar email" id="email" onChange={handleChange} required></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input type="password" className="input" placeholder="ingresar contraseña" id="password" onChange={handleChange} required></input>
        </div>
        <p>¿Ya tienes cuenta? <a>Inicia sesión</a></p>
        <button className='buttonRegister' type="submit" >Register</button>
      </div>
    </form>
  )

}