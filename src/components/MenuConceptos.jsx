import React from "react";
import {Link, NavLink } from "react-router-dom";

export const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menu con enlaces HTML (No recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">acerca</a>
          <a href="/conacto">Home</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">acerca</Link>
          <Link to="/conacto">Home</Link>
        </li>
        <li>
          <span>Componente NavLink</span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeclassname="active">
            acerca
          </NavLink>
          <NavLink to="/conacto" activeclassname="active">
            Home
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};
