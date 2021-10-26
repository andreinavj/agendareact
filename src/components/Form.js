import React, { useState } from "react";
import {registrarUsuario,listarContatos} from "./apiFormulario"



function Form() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[telefone,setTelefone] = useState("");

  const Criar = (event) => {
    console.log("funciona")
    event.preventDefault()
    const data= {nome:name,email:email,telefone:telefone}
    registrarUsuario(data)
  }

   
 
  
 
  return (
    <div>
      <form  className="Formulario"onSubmit={Criar}>
        <label className="label">Nome</label>
        <input
          type="text"
          placeholder="Ana"
          name="nome"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label className="label">E-mail</label>
        <input
          type="email"
          placeholder="ana@gmail.com"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label className="label">Telefone</label>
        <input
          type="tel"
          placeholder="14 999999999"
          name="telefone"
          onChange={(event) => setTelefone(event.target.value)}
        ></input>

        <button type="submit" >Guardar</button>
      </form>
      </div>
  );
}
export default Form;
