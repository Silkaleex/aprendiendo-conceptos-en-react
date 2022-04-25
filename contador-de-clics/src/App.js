import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/contador";
import logoSilkaleex from "./imagenes/mylogo.png";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logoSilkaleex} alt="Logo de Silkaleex" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
