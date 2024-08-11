import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import producto1 from './imagenes1/americano.jpg'
import producto2 from './imagenes1/muffin.jpg'
import producto3 from './imagenes1/tarta.jpg'
import producto4 from './imagenes1/producto2.jpg'
import  {Menu}  from './menu';
import { Cabecera } from './cabecera';
import { Pie } from '../componentes/pie';



const productos = [
  {
    id: 1,
    nombre: 'Café Americano',
    precio: 3.50,
    imagen: producto1, 
  },
  {
    id: 2,
    nombre: 'Muffin de arándanos',
    precio: 3.80,
    imagen: producto2, 
  },
  {
    id: 3,
    nombre: 'Tarta de queso',
    precio: 4.50,
    imagen: producto3, 
  },
  {
    id: 4,
    nombre: 'Capuchino',
    precio: 4.00,
    imagen: producto4, 
  },
];

export const MyCarrito = () => {
  return (
    <div
    
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Cabecera/>
      <Menu/>

      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito de Compras</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            {productos.map(producto => (
              <ListGroup.Item key={producto.id}>
                <Card>
                  <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                      Precio: ${producto.precio.toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cancelar</Button>
          <Button variant="primary">Confirmar compra</Button>
        </Modal.Footer>
      </Modal.Dialog>
<Pie/>

    </div>
  );
};

