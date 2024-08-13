import React from 'react'
import { Menu } from './menu.js';
import { Cabecera } from './cabecera.js';
import { Pie } from './pie.js';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contactos.css';

export default function Contactos (){
    return(
        <div>
            <Cabecera/>
            <Menu/>
                
            
            <div className='container-contactos'>
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h1 className="display-4 titulo">Contáctanos</h1>
                        <p className="lead">Nos encantaría saber de ti. ¿Cómo podemos ayudarte?</p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
          
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                            </Form.Group>

                            <Form.Group controlId="formSubject" className="mb-3">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control type="text" placeholder="Asunto de tu mensaje" />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 boton">
                                Enviar Mensaje
                            </Button>
                        </Form>
                 </Col>
                </Row>

        
                <Row className="mt-5">
                    <Col md={4} className="text-center">
                        <h5>Dirección</h5>
                        <p>Av. Ladrón de Guevara E11-253, Quito 170143</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Teléfono</h5>
                        <p>02 4#6 78##</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Correo Electrónico</h5>
                        <p>cafeysueños@cafeteria.com</p>
                    </Col>
                    </Row>
            </Container>

            <Pie/>

            </div>
    </div>
        
    );
}