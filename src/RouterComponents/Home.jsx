import { signOff } from '../FirebaseConfig/firebaseAuth.js';
import React from 'react'
import './Home.css';


export const Home = () => {

  return (
    <div className='container'>
      <div>
        aqui banner
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
      <div className="breackFast"  >

        <div>
          <div>
            <button>
              <span role="img" aria-label="grinning face" id="grinning face">Café americano $5</span>
            </button>
          </div>
          <div>
            <button>
              <span role="img" aria-label="party popper" id="party popper">Café con leche $7</span>
            </button>
          </div>
          <div>
            <button>
              <span role="img" aria-label="woman dancing" id="woman dancing">Sandwich de jamón y queso $10</span>
            </button>
          </div>
          <div>
            <button>
              <span role="img" aria-label="woman dancing" id="woman dancing">Jugo de frutas natural : $7</span>
            </button>
          </div>
        </div>

        <div className='lunch'>
          <div>
            <div className='burger'>
              <div>
                <button>
                  <span role="img" aria-label="grinning face" id="grinning face"> Hamburguesa simple $10  </span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="party popper" id="party popper">Hamburguesa doble $15</span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="woman dancing" id="woman dancing">Papas fritas $5</span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="woman dancing" id="woman dancing">Aros de cebolla : $5</span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="woman dancing" id="woman dancing">Agua 500ml : $5</span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="woman dancing" id="woman dancing">Agua 750ml: $7</span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="woman dancing" id="woman dancing">Bebida/gaseosa 500ml	 : $7</span>
                </button>
              </div>
              <div>
                <button>
                  <span role="img" aria-label="woman dancing" id="woman dancing">Bebida/gaseosa 750ml : $10</span>
                </button>
              </div>
            </div>
          </div>
        </div>









      </div>
    </div>
  )
} 
