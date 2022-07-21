import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Login } from "../Login/Login";

//testeamos que un componente se ubique en una pagina

test.only("render ¿No tienes cuenta?", () => {
  const userContext = React.createContext()

  const AuthProvider = ({ children }) => {
     const value = {
      user: {},
      setUser: () => {},
      registerUser: () => {},
      loginUser: () => {},
     }

      return (
          <userContext.Provider value={value}>
              {children}
          </userContext.Provider>
      );
  };
  const history = createMemoryHistory();
  render(
    <AuthProvider>
        <Router location={history.location} navigator={history}>
        <Login/>
      </Router>
    </AuthProvider> 
  );

  screen.debug()
  const linkElement = screen.getByText(/No tienes cuenta/i);
  expect(linkElement).toBeInTheDocument();
});

