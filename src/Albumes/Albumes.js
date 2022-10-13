import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState, useEffect } from "react"
import { servicioToken } from "../services/servicioToken.js"

export function Albumes() {

    //Declarando Mi Primer useState
    const[canciones,setCanciones]=useState(null)
    
    //useState Para La Carga De Datos
    const[carga,setCarga]=useState(true)

    //Usando El useEffect
    useEffect(function(){

        servicioSpoty()
        .then(function(respuesta) {

        setCanciones(respuesta.tracks)

        setCarga(false)
        
    })
    console.log(canciones)

    },[])

    if(carga==true){

        return(

            <>
                <h1>Estoy Cargando....</h1>
            </>

        )

    }
    else{

        return(

            <>
                <h1>Hola Soy Albumes Y Soy Un Componente</h1>
            </>
    
        )

    }

    //Esto Es Una Variable = Metodo Global En React
    
    
    
    
}