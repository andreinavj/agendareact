import { waitForElementToBeRemoved } from '@testing-library/dom'
import React, { useState } from 'react'
import { listarContatos } from "./apiFormulario"

function Listar() {
   const [lista, setLista] = useState("")
   
   
const fazerLista = async() => {
    const result = await listarContatos()
    setLista(result)
}


   
    return (
        <div>
<table>
  <tr>
    <th>Nome Completo</th>
    <th>E-mail</th>
    <th>Telefone</th>
  </tr>
 

  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button>Editar</button></td>
    <td><button>Apagar</button></td>
  </tr>
 
</table>
<button onClick={() => fazerLista()}>Contatos cadastrados</button>

{lista && lista.data?.map(datos => {
    return (
        <div  key = {datos.id}>
            <ul>
                
        <li>{datos.nome}</li>
        <li>{datos.email}</li>
        <li>{datos.telefone}</li>
            </ul>
        </div>
    )
})}


               
        </div>
    )
}

export default Listar