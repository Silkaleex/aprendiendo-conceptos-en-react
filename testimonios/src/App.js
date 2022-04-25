import "./App.css";
import Testimonio from "./componente/testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal"></div>
      <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>
      <Testimonio
        nombre="Adam boston"
        pais="Noruega"
        imagen="adam"
        cargo="Ingeniero de software"
        empresa="spotify"
        testimonio="sin duda algo con mucho presente y también futuro. Vivimos rodeados de aplicaciones de móviles, programas para ordenador y cada vez más dispositivos de lo que se conoce como el Internet de las Cosas que cuentan con herramientas de software. "
      />
      <Testimonio
        nombre="Elsa"
        pais="New York"
        imagen="elsa"
        cargo="Frontend Developer"
        empresa="spotify"
        testimonio="Diseñamos una pagina web para dar vida al diseño visual estático de tu página web. Incorporamos definiciones de etapas previas a un código fluido y semántico."
      />
      <Testimonio
        nombre="Freddy Brown"
        pais="London"
        imagen="freddy"
        cargo="Ingeniero Java"
        empresa="spotify"
        testimonio="creación de software, así como en la realización de pruebas y depuración de código. Además de la programación de sitios, aplicaciones y bases de datos, que optimicen el funcionamiento de las compañías. Además del diseño y actualización de estos productos y servicios."
      />
    </div>
  );
}

export default App;
