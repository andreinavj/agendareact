
import React from "react";
import Form from "./Form";
import "../App.css";
import Listar from "./Listar"

function App() {
 
  return (
    <div className="fondo">
      <h1 className="App">Agenda de Contato</h1>
      <Form />
      <Listar/>
    </div>
  );
}
export default App;