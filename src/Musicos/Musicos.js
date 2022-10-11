import { Footer } from "../Footer/Footer.js"

export function Musicos(params) {

    //Arreglo De Objetos Es Formato Comun Al Consumir Un Api

    let Musicos = [
        {
            nombre: "Zion",
            rol: "Cantante",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/conci1.jpg?alt=media&token=63d68363-fe3c-465e-b9e9-e9d42afbc39a"

        },
        {
            nombre: "lennox",
            rol: "Cantante",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/conci2.jpg?alt=media&token=fab8c589-e633-43b8-93af-e1d4f4a4bdb9"

        }
    ]

    let conciertosMemorables = [

        {
            fecha: "El 4 De Febrero De 2017",
            pais: "En el Coliseo De Puerto Rico",
            descripcion: "Zion & Lennox (El Concierto) (Recap) Coliseo Puerto Rico 2017",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/puerto%20rico%202017.jpg?alt=media&token=7e22312f-a214-42dc-874c-c145c9200834"
        },
        {
            fecha: "EL 12 De Agosto De 2015",
            pais: "Medellin",
            descripcion: "Zion Y Lennox en Feria de Las Flores, Medellin 2015 · Zion & Lennox",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/Medellin%202015.jpg?alt=media&token=3511a876-8170-4719-abc9-e1cdc8e47064"
        },
        {
            fecha: " El 27 De Febrero De 2018",
            pais: "VIÑACHILE",
            descripcion: "ZION Y LENNOX #VIÑA2018 - Festival de Viña del Mar 2018",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/VI%C3%91A2018.jpg?alt=media&token=6db43dde-47b0-4a79-9105-894751342e23"
        },
        {
            fecha: "El 2 De Octubre De 2019",
            pais: "La Pampilla De Coquimbo",
            descripcion: "Zion y Lennox live en Coquimbo, La Pampilla",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/Coquimbo%2C%20La%20Pampilla.jpg?alt=media&token=242966f3-14e4-4801-83a1-93c2cfdcb5a5"
        },
        {
            fecha: "404",
            pais: "Error 404",
            descripcion: "Error 404",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/Error404.webp?alt=media&token=eeb38ba6-5e60-4257-80ce-b1e7fe78f37c"
        }


    ]

    //Mapeando Un Arreglo Para Hacer Render
    return (
        //let hola="Brandon" De Esta Forma NO Hay Que Interpolar

        //Siempre De Map Va Una Funcion Anonima o Funcion Flecha
        //Un .map Siempre Te Return algo
        <>
            <div className="row row-cols-1 row-cols-md-4 g-3" >

                {
                    Musicos.map(function (Musico) {
                        return (
                            <>
                                <div className="col mt-4 " >
                                    <div className="card h-100" >

                                        <img src={Musico.url} className="img-fluid w-100 h-100 " alt="foto" />
                                        <h3 className="text-primary text-center" > {Musico.nombre}  </h3>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>


            <div className="row">
                {
                    conciertosMemorables.map(function (concierto) {
                        return (
                            <>
                                <div className="col">
                                    <div className="card h-100" >

                                        <img src={concierto.foto} className="img-fluid w-100 h-100 " alt="foto" />
                                        <h3 className="text-primary text-center" > {concierto.fecha}  </h3>
                                        <h3 className="text-primary text-center" > {concierto.pais}  </h3>
                                        <h3 className="text-primary text-center" > {concierto.descripcion}  </h3>


                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <Footer />
        </>



    )

}

