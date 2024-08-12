import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/MainLogo.png';
import user from './imagenes/Usuario_logo.webp';
import './login.css';

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(''); // Estado para mensaje de éxito
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    };

    const validateForm = () => {
        const formErrors = {};
        let isValid = true;

        const { email, password } = formValues;

        if (!email) {
            formErrors.email = "Complete el campo de usuario";
            isValid = false;
        }

        if (!password) {
            formErrors.password = "Complete el campo de contraseña";
            isValid = false;
        }

        setErrors(formErrors);

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Inicio de sesión exitoso');
            console.log('Inicio de sesión exitoso');
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/');
            }, 3000);
        }
    };

    const handleRegClick = () => {
        navigate('/registro');
    };

    const handleForgotPasswordClick = () => {
        navigate('/ContraOlvidada');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div>
            <img src={logo} alt="logo" width={'150px'} />

            <div>
                <img src={user} alt="user" className="user" width={'90px'} />
                <div className="contenedor-login">
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'error' : ''}`}
                                    id="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    placeholder="usuario@ejemplo.com"
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Contraseña</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'error' : ''}`}
                                    id="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    placeholder="********"
                                />
                                {errors.password && <small className="text-danger">{errors.password}</small>}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                        <br /><br />
                        <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
                        <br /><br />
                        <p>Olvidaste tu contraseña? <a onClick={handleForgotPasswordClick}>Recuperarla</a></p>
                        <p>No tienes cuenta? <a onClick={handleRegClick}>¡Regístrate!</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
