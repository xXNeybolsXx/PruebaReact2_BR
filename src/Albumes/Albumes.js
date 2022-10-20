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
            <div className="row row-cols-md-4 g-4 justify-content-center text-center " >

                {
                   canciones.map(cancion=>{

                    return(

                        <>
                        
                            <div className="col" >

                                <div className="card h-100"  >

                                    <img src={cancion.album.images[0].url}/>
                                    <audio controls src={cancion.preview_url} ></audio>
                                    <h1 >{cancion.name}</h1>

                                </div>
                                
                            </div>
                        
                        </>

                    )

                   }) 
                }

            </div>
        </>
    
        )

    }

    //Esto Es Una Variable = Metodo Global En React
    
    
    
    
}