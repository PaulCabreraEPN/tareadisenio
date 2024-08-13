import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './componentes/menu.js';
import { Cabecera } from './componentes/cabecera.js';
import { Pie } from './componentes/pie.js';
import Registro from './componentes/registro.js';
import Login from './componentes/login.js';
import { Productos } from './componentes/Productos.js';
import { Sobre_Nosotros } from './componentes/Sobre_Nosotros.js';
import { useNavigate } from 'react-router-dom';
import ContraOlvidada from './componentes/ContraOlvidada.js';

import promo1 from './componentes/imagenes/Promocionales/Promo_bbble_coffee.jpg';
import promo2 from './componentes/imagenes/Promocionales/Promo_black_drink.jpg';
import promo3 from './componentes/imagenes/Promocionales/Promo_ice_coffee.jpg';
import promo4 from './componentes/imagenes/Promocionales/Promo_ice_cream.jpg';
import { Promociones } from './componentes/Promociones.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactos from './componentes/Contactos.js';
import { MyCarrito } from './componentes/MyCarrito.js';




function HomePage() {
  const navigate = useNavigate();

  const handleLoginClickProm = () => {
    navigate('/Promociones');
  };

  const handleLoginClickPro = () => {
    navigate('/Productos');
  };
  
  return (
    <>
      <Cabecera />
      <Menu />
      <main className='cuerpo'>
        <div id='promos' className='container'>
          <div className='row'>
            <div className='col-6'>
              <br></br>
              <h4> Disfruta de nuestras promociones </h4>
            </div>
            <div className='col-6' id='cabezaProm'>
            <br></br>
              <button type='button' onClick={handleLoginClickProm} className='botonProm'>Ver todas las Pomociones</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo3} alt="Promo 3" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo2} alt="Promo 2" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo1} alt="Promo 1" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo4} alt="Promo 4" className='promocional' />
            </div>
          </div>
        </div>
        <div className='Invitacion'>
          <h1>Conoce nuestro menú</h1>
          <p>Te invitamos a explorar nuestra marca con deliciosos productos</p>
          <button type='button' className='botones' onClick={handleLoginClickPro} >Ver Menú</button>
        </div>
      </main>
      <Pie />

      
      
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />}  />
        <Route path="/ContraOlvidada" element={<ContraOlvidada />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Sobre_Nosotros' element={<Sobre_Nosotros />} />
        <Route path='/Promociones' element={<Promociones />} />
        <Route path='/Contactos' element={<Contactos/>} />
        <Route path='/MyCarrito' element={<MyCarrito/>} />
      </Routes>
    </Router>
  );
}



export default App;
