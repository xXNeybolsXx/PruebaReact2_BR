import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState } from "react"

export function Albumes() {

    //Declarando Mi Primer useState
    const[canciones,setCanciones]=useState(null)
    //Esto Es Una Variable = Metodo Global En React

    servicioSpoty()
    .then(function(respuesta) {

        setCanciones(respuesta.tracks)
        
    })
    console.log(canciones)
    


    return(

        <>
            <h1>Hola Soy Albumes Y Soy Un Componente</h1>
        </>

    )
    
}