// import  Login  from '../../components/Login/Login.jsx'
// //import { AuthProvider } from '../../../context/AuthContext.js';
// import '@testing-library/jest-dom';

// jest.mock('../../../context/AuthContext.js');


// //testeamos que un componente se ubique en una pagina

// test('rendering Login component that uses useLocation ', () => {
//   const history = createMemoryHistory()
//   const route = '/Login'
//   history.push(route)
//   render(
//     <Router location={history.location} navigator={history}>
//       <Login />
//     </Router>,
//   )

//   expect(screen.getByTestId('Inicia sesión')).toHaveTextContent(route)
// })








// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup


import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { Login } from './Login';
jest.mock('../../Context/__mocks__/authContext.jsx');
test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<Login>{testMessage}</Login>)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/No tienes cuenta/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})