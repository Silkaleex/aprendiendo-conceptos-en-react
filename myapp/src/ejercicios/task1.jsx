import React from "react";
import PropTypes from "prop-types";
import { cont } from "./task.class2.js";

function Estado({ contando }) {
  return (
    <div>
      <h2>Nombre: {contando.nombre}</h2>
      <h3>Apellidos: {contando.apellidos}</h3>
      <h4>Email: {contando.email}</h4>
      <h5>Tú Estado es: {contando.estados ? "CONECTADO" : "DESCONECTADO"}</h5>
    </div>
  );
}

Estado.propTypes = {
  contando: PropTypes.instanceOf(cont),
};

export default Estado;
