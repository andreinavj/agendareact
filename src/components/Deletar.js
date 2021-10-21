import React, { useState } from 'react'
import { deletarContato, listarContatos } from "./apiFormulario"


function Deletar() {
    const [lista, setLista] = useState("")

    const listar = async () => {
        const result = await listarContatos()
        setLista(result)
    }

    const deletar =  (id) => {
        deletarContato(id)
    }


    return (

        <div>
            <div ></div>

            <button onClick={() => listar()}>Deletar contatos</button>
            {lista && lista.data?.map(element => {
                return (
                    <div key={element.id} onClick={() => deletar(element.id)} >
                        <ul>
                            <li>{element.name}</li>
                            <li>{element.email}</li>
                            <li>{element.id}</li>
                        </ul>
                        
                    </div>
                )
            })}
        </div>
    )

}

export default Deletar