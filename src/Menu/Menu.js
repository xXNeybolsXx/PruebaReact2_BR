import { Link } from "react-router-dom";

export function Menu() {

    return (

        <>
            <nav class="navbar navbar-expand-lg bg-dark  ">
                <div class="container-fluid  ">
                    <Link class="navbar-brand text-white " to="/">Menu</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white" to="/historia">Historia</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white " to="/integrantes">Integrantes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white " to="/albumes">Albumes</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )

}