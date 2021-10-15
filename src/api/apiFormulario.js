import axios from "axios"

const urlBase="http://localhost:3000"
export const registrarUsuario= async(datos)=>{
    const url = `${urlBase/contacts}`
    
    return await axios.post(url,datos)
}