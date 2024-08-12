import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registro.css';
import logo from './imagenes/MainLogo.png';

const Registro = () => {
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({
        user: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

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

        const { user, email, phone, password, confirmPassword } = formValues;

        if (!user) {
            formErrors.user = "Nombre es obligatorio";
            isValid = false;
        }

        if (!email) {
            formErrors.email = "Correo Electrónico es obligatorio";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Correo Electrónico inválido";
            isValid = false;
        }

        if (!phone) {
            formErrors.phone = "Telefono es obligatorio";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            formErrors.phone = "Telefono debe contener exactamente 10 dígitos";
            isValid = false;
        }

        if (!password) {
            formErrors.password = "Contraseña es obligatoria";
            isValid = false;
        } else if (password.length < 8) {
            formErrors.password = "Contraseña debe contener al menos 8 caracteres";
            isValid = false;
        } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
            formErrors.password = "Contraseña debe contener caracteres y dígitos numéricos";
            isValid = false;
        }

        if (password !== confirmPassword) {
            formErrors.confirmPassword = "Las contraseñas no coinciden";
            isValid = false;
        }

        setErrors(formErrors);

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Registro exitoso');
            console.log('Formulario enviado con éxito');
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/');
            }, 2000);
        }
    };

    const handleCancel = () => {
        navigate('/login');
    };

    return (
        <section className="container mt-5 registro">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-4 logo">
                        <img src={logo} alt="logo" width={'150px'} />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Crea tu cuenta</h2>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            <form id="quiz-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="user">Nombre</label>
                                    <input
                                        type="text"
                                        id="user"
                                        className={`form-control ${errors.user ? 'error' : ''}`}
                                        placeholder="Nombre Apellido"
                                        value={formValues.user}
                                        onChange={handleChange}
                                    />
                                    {errors.user && <small className="text-danger">{errors.user}</small>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`form-control ${errors.email ? 'error' : ''}`}
                                        placeholder="correo@ejemplo.com"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefono</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className={`form-control ${errors.phone ? 'error' : ''}`}
                                        placeholder="0912345678"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className={`form-control ${errors.password ? 'error' : ''}`}
                                        placeholder="********"
                                        value={formValues.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <small className="text-danger">{errors.password}</small>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                                        placeholder="********"
                                        value={formValues.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                                </div>
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success">Registrarse</button>
                                    <br /><br />
                                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pie">.</div>
        </section>
    );
};

export default Registro;
