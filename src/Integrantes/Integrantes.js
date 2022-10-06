
import'./Integrantes.css'

import'animate.css';

import WOW from 'wowjs';

import { useEffect } from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (

        <>
            <div className="row my-5 justify-content-center " >
                <div className="col-12 col-md-4 zoom " >
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/zion3.jpeg?alt=media&token=8dc44509-1d0a-414a-87ce-a998671abdb3" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__rollIn wow " data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>

                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__fadeInRight ' >

                    <h2> Zion </h2>
                    <h3> Cantante </h3>

                </div>

            </div>
            
            <div className="row mt-2" >
                <div className="col-12" >

                    <div className="collapse " id="collapseExample">

                        <div className="card card-body  ">
                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>

                    </div>


                </div>

            </div>

            <div className="row my-5 justify-content-center " >
                

                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated  animate__fadeInLeft' >

                    <h2> Lennox </h2>
                    <h3> Cantante </h3>

                </div>

                <div className="col-12 col-md-4 zoom " >
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/Lennox2.jpg?alt=media&token=f1888777-fac5-4851-a1eb-9d4ec625965a " alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__rollIn wow " data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>

            </div>
            
            <div className="row mt-2" >
                <div className="col-12" >

                    <div className="collapse " id="collapseExample">

                        <div className="card card-body">
                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>

                    </div>


                </div>

            </div>

        </>

    )

}