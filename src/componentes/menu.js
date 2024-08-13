import React from 'react';
import "./menu.css";
import { useNavigate } from 'react-router-dom';
import { Navbar} from 'react-bootstrap';
import carrito from './imagenes/Iconos/carrito.png'


export const Menu = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/MyCarrito');
  };

  return (
    <div class='menu'>
        <Navbar className="navbar-custom" variant="dark" expand="lg">
        
        <Navbar.Brand href="https://coffeedreams.vercel.app/">COFFEE & DREAMS</Navbar.Brand>
        <Navbar.Brand href="#home" id='carrito'><a 
              className="ml-3" 
              href="#" 
              onClick={handleLoginClick}
            >
              <img src={carrito} alt="Usuario" width="40" />
        </a></Navbar.Brand>

    </Navbar>
    </div>
    
  )
}
