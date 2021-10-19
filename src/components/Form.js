import React, { useState } from "react";
import axios from "axios"
import {registrarUsuario} from "./apiFormulario"


function Form() {
  const [datos, setDatos] = useState({
    nome: "",
    email: "",
    telefone: ""
  });
  const introduceDatos = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };
  const criar = () =>{
    event.preventDefault()
    const data = {nome:nome,email:email,telefone:telefone}
    registrarUsuario(data)
  }

  return (
    <div>
      <form onSubmit={criar}>
        <label className="label">Nome</label>
        <input
          type="text"
          placeholder="Ana"
          name="nome"
          onChange={introduceDatos}
        ></input>
        <label className="label">E-mail</label>
        <input
          type="email"
          placeholder="ana@gmail.com"
          name="email"
          onChange={introduceDatos}
        ></input>
        <label className="label">Telefone</label>
        <input
          type="tel"
          placeholder="14 999999999"
          name="telefone"
          onChange={introduceDatos}
        ></input>

        <input type="submit" value="Guardar"/>
      </form>
      <h3>
        
        {datos.nome}-{datos.email}-{datos.telefone}
      </h3>
    </div>
  );
}
export default Form;
