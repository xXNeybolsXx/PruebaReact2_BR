export async function servicioToken(){

    //URI

    const URI="https://accounts.spotify.com/api/token"

    //DATOS

    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=8cd5b33f06a443a9ac64bf9dc0431fe0"
    const DATO3="client_id=1bbcdf2cf6a34c7abe1327021c26836f"

    //PETICION

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //FETCH

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    return datos
    

}