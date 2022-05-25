import React from "react";
import { ESTADO } from "./level.enum1";
import { cont } from "./task.class2.js";
import Estado from "./task1";

const EstadoComponente = () => {
  const defecto = new cont("Example", "Description", false, ESTADO.DISPONIBLE);
  return (
    <div>
      <div>
        <h1>Datos </h1>
      </div>
      <Estado task={defecto} />
    </div>
  );
};

export default EstadoComponente;
