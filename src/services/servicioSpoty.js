export async function servicioSpoty() {

    const URI="https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1/top-tracks?market=US"

    const TOKEN="Bearer BQCsCktymTFIKivlYC-VXYnL8yp8ym82u10K8c-8QTkH9etHkTglvMxtarlGkr0fPcPYiGI8KJDVGww1RvRRPmQ2TsePzZ7bK3BDIXXtjEuk5q6iyVEmPLVZxrk-pTgwhLtJcLcGEBUIkIbCAtuI_ff3XxYrN-RtfmKVoGp0hDtM_eVebX7NRxNc49h1a2k"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos


    
}