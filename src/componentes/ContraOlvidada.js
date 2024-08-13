import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import logo from './imagenes/MainLogo.png';

const ContraOlvidada = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Complete el campo de correo electrónico');
            return;
        }

        console.log('Correo enviado a:', email);
        alert('Solo necesita confirmar su correo electrónico para enviarle instrucciones para restablecer su contraseña. No olvides revisar tu carpeta de correo no deseado');

        navigate('/login');
    };

    const handleCancel = () => {
        navigate('/login');
    };

    return (
        <div>
            
            <div>
            <img src={logo} alt="logo" width={'150px'}  />

            </div>

            <div className="text-center">
                <h2>Olvidé mi Contraseña</h2>
            </div>
            <div className="contenedor-login">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control ${error ? 'error' : ''}`}
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={handleChange}
                        />
                        {error && <small className="text-danger">{error}</small>}
                    </div>

                    <button type="submit" className="btn btn-success">Restablecer Contraseña</button>
                    <br /><br />
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default ContraOlvidada;
