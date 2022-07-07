import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Login } from "../Login/Login";
import { AuthProvider } from "../../Context/authContext";
jest.mock("../../Context/__mocks__/authContext.jsx");
//testeamos que un componente se ubique en una pagina

test("render ¿No tienes cuenta?", () => {
  const history = createMemoryHistory();
  // const route = '/Login'
  // history.push(route)
  render(
    <AuthProvider>
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    </AuthProvider>
  );
  const linkElement = screen.getByText(/No tienes cuenta/i);
  expect(linkElement).toBeInTheDocument();
});

test("Componente login", async () => {
  const history = createMemoryHistory();
  render(
    <AuthProvider>
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    </AuthProvider>
  );
  const email = screen.getByTestId("loginemail");
  const password = screen.getByTestId("loginPassword");

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});



  test ("usuario autenticado", async () => {
    const history = createMemoryHistory();
    render(
      <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </AuthProvider>
    );
    const email = await screen.findByPlaceholderText("ingresar email");
    const password = await screen.findByPlaceholderText("ingresar contraseña");
    const buttonLogin = await screen.findByText("Login");

    fireEvent.change(email, { target: { value: "cocina@gmail.com" } });
   
    fireEvent.change(password, { target: { value: "cocina$123." } });
    fireEvent.click(buttonLogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
