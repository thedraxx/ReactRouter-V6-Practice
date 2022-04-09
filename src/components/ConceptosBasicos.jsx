import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element="Home"></Route>

          <Route path="/acerca" element="acerca"></Route>

          <Route path="/contacto" element="contacto"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
