import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MenuConceptos } from "./MenuConceptos";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
export const ConceptosBasicos = () => {
  return (
    <div>
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
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
