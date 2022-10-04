import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

//Componente Es Una Funcion Y Se Pueden Programar


export function Home() {

    let descripcionBanda="Félix Ortiz y Gabriel Pizarro nacieron en Carolina, Puerto Rico. Se conocieron en 1998, mientras eran vecinos y tenían intereses comunes por el hip hop, reggae y dancehall.12​ Su gusto común por la música rápidamente se convirtió en una seria pasión una vez que el hermano de Lennox los invitara a cantar una canción de manera oficial en 2001.13​14​. Previo a sus apodos actuales, Ortiz usaba el nombre de Indio, mientras que Pizarro usó el apodo de Shakka Dan, este último fue debido a las preferencias del rapero por el estilo reggae. Al explicar el origen de sus nombres, Ortiz comentó que mientras usaba el apodo de Indio, sentía que le faltaba algo para completarlo, así que se le ocurrió poner el nombre de Indio Zion.15​ Al explicar en otra entrevista su significado, comentó “en la cultura de reggae, de rasta, ven el Sion como un lugar sagrado, positivo”. En el caso de Pizarro, expresa “lo saqué de una película donde salían varios cantantes del hip hop; me gustó mucho como sonaba y además, hacía química con el nombre de Zion”.16​ Tal película era Belly (1998), dirigida por Hype Williams.15​. Mientras ambos se interesaron en el nuevo género, su enfoque fue distinto a las canciones tradicionales de la escena underground, en lo que se refieren actualmente como «el toque comercial» que no poseía el reguetón,14​ es decir, el tipo de letras alejadas de la violencia y la misoginia.17​. Ambos tienen familiares que también se destacan en el género, Zion es primo-segundo del corista Jory Boy, quien formaba parte del dúo Nova & Jory,18​ mientras que Lennox es hermano de Luis Pizarro, más conocido como Mackie Ranks del dúo Yaga & Mackie.19​"

    return(

        <>
        
            <div className="banner" >
            
            </div>

            <div className="container mt-5" >
                <div className="row">
                    <div className="col-12" >

                        <h1 className="text-center" > zillow y lennox </h1> 
                        <p className="text-center" >
                        {descripcionBanda}    
                        </p>                      
                        
                    </div>
                
                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </>

    )

    
}