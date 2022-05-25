import logo from "./logo.svg";
import "./App.css";
// import TaskListComponent from "./componentes/container/task.list";
import EstadoComponente from "./ejercicios/task.list1";
// import Greeting from "./componentes/pure/greeting";
// import Greetingf from "./componentes/pure/greetingF";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente de gretting.js*/}
        {/* <Greeting name="Silkaleex" /> */}
        {/*Componente de ejemplo funcional*/}
        {/* <Greetingf name="Silkaleex" /> */}
        {/*Componente de listado de tareas*/}
        {/* <TaskListComponent /> */}
        <EstadoComponente />
      </header>
    </div>
  );
}

export default App;
