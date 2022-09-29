import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
//Siempre Se Trae El Componente Rutas
import { Rutas } from './Routes/Rutas.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Rutas />
    </BrowserRouter>

  </React.StrictMode>
);


