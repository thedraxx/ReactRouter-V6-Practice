import React from "react";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink to="/contacto" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <span>Parametros:</span>
          <Link to="/usuario/johnmircha">JohnMircha</Link>
          <Link to="/usuario/kenai">Kenai</Link>
        </li>
        <li>
          <span>Parametros de consulta :</span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones :</span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas:</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas:</span>
          <Link to="/react">React</Link>
        </li>
      </ol>
    </nav>
  );
};
