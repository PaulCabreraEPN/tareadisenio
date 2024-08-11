import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/MainLogo.png';
import user from './imagenes/Usuario_logo.webp';
import './cabecera.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export const Cabecera = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLoginClickPro = () => {
    navigate('/Productos');
  };

  const handleLoginClickProm = () => {
    navigate('/Promociones');
  };

  const handleLoginClickSob = () => {
    navigate('/Sobre_Nosotros');
  };

  const handleLoginClickI = () => {
    navigate('/' );
  };

  const handleClick = () =>{
    navigate('/Contactos')
  }

  return (
    
    <Navbar expand="lg" className='navbar navbar-dark'>
      
        <Navbar.Brand href="http://localhost:3000/">
          <img src={logo} alt="Logo" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link-custom" onclick={handleLoginClickI} id='secciones'>Inicio</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickPro} id='secciones'>Menú</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickProm} id='secciones'>Promociones</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickSob} id='secciones'>Sobre Nosotros</Nav.Link>
            <Nav.Link className='nav-link-custom' onClick={handleClick} id='secciones'>Contactos</Nav.Link>
          </Nav>
          <Form inline className="my-2 my-lg-0">
            <FormControl
              type="search"
              placeholder="Buscar productos"
              className="mr-sm-2"
              aria-label="Search"
            />
          </Form>
          <div className="d-flex align-items-center ml-3">
            <Button 
              id='boton_inicio'
              variant="outline-primary" 
              onClick={handleLoginClick}
            >
              Iniciar sesión
            </Button>
            <a 
              className="ml-3" 
              href="#" 
              onClick={handleLoginClick}
            >
              <img src={user} alt="Usuario" width="50" />
            </a>
          </div>
        </Navbar.Collapse>
     
    </Navbar>
  );
};
