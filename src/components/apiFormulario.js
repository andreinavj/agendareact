import axios from "axios";

const urlBase="http://localhost:3000"

export const registrarUsuario= async(datos)=>{
    const url = `${urlBase}/contacts`
     
    return await axios.post(url,datos)
}

export const listarContatos = async () => {

    const url = `${urlBase}/contacts`
    return await axios.get(url)
   

}
export const deletarContato = async (id) => {
    const url = `${urlBase}/contacts/${id}`
    console.log('deletado :(')
    return await axios.delete(url)
}

