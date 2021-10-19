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
                <button onClick={() => fazerLista()}>Contatos cadastrados</button>

                {lista && lista.data?.map(element => {
                    return (
                        <div  key = {element.id}>
                            <ul>
                                
                        <li>{element.nome}</li>
                        <li>{element.email}</li>
                        <li>{element.telefone}</li>
                            </ul>
                        </div>
                    )
                })}

        </div>
    )
}

export default Listar