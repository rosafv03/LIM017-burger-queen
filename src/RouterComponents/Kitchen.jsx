
import { useContext } from "react"
import  {userContext, singOutUser} from "../context/authContext"
export const Kitchen = () => {

  const{ user, singOutUser} =useContext(userContext);

  const hadleClickLogout = async () => {
  try{
  await singOutUser();
  console.log('cerrar sesión', user)
  }catch(error){
    console.log(error.code)
  }
    };
    return (
      <div>
      <h1>Cocina</h1>
      <button onClick={hadleClickLogout}></button>
      </div>
    )
  }
  