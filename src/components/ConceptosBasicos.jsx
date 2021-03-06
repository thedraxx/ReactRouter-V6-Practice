import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { MenuConceptos } from "./MenuConceptos";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { ReactTopics } from "./pages/ReactTopics";
import { Usuario } from "./pages/Usuario";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />
        <hr />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/usuario/:username" element={<Usuario />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route
            path="/about"
            element={
              <>
                {" "}
                <Navigate to="/acerca" />{" "}
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                {" "}
                <Navigate to="/contacto" />{" "}
              </>
            }
          ></Route>
          <Route path="react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos Basicos</h2>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element="Home"></Route>

          <Route path="/acerca" element={<Acerca />}></Route>

          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <MenuConceptos />
        <hr />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/usuario/:username" element={<Usuario />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route
            path="/about"
            element={
              <>
                {" "}
                <Navigate to="/acerca" />{" "}
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                {" "}
                <Navigate to="/contacto" />{" "}
              </>
            }
          ></Route>
          <Route path="react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
