
import React from "react";
import Form from "./Form";
import "../App.css";
import Listar from "./Listar"
import Deletar from "./Deletar";


function App() {
  
  
  return (
    <div className="fondo">
      <h1 className="App">Agenda de Contato</h1>
      <Form />
      <Listar />
      <Deletar/>
    </div>
  );
}
export default App;