
import React, { useState } from 'react'
import { listarContatos } from "./apiFormulario"
import "../App.css"

function Listar (){

    const [lista, setLista] = useState("")
   
   
    const fazerLista = async() => {
        const result = await listarContatos()
        setLista(result)
    

    }
    return (
        <div class="container">
<table>
  <tr>
    <th>Nome Completo</th>
    <th>E-mail</th>
    <th>Telefone</th>
    <th> <button onClick={() => fazerLista()} >Contatos cadastrados</button></th>
  </tr>
 

  <tr>
 

{lista && lista.data?.map(element => {
    
        return(
        <div key = {element.id}>   
                
        <td>{element.name}</td>
        <td>{element.email}</td>
        <td><button>Editar</button></td>
    <td><button>Apagar</button></td> 
        </div>
    
    
)})}
     
  </tr> 
</table>
         
        </div>
    )
}


export default Listar