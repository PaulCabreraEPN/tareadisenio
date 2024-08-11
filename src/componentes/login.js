import React from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/MainLogo.png';
import user from './imagenes/Usuario_logo.webp';
import './login.css'

const Login=() =>{
    const navigate = useNavigate();
    const handleRegClick = () => {
    navigate('/registro');
  };
  const handleCancel = () => {
    navigate('/');
    };
    return(
        <div >
            <img src={logo} alt="logo" width={'90px'} />

            <div>
            <img src={user} alt="user" className="user" width={'90px'} />
                <div className="contenedor-login">
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Usuario</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputPassword"/>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-success">Iniciar Sesion</button>
                                    <br /><br />
                                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
                                    <br /><br />
                    <p>Olvidaste tu contraseña?</p>
                    <p>No tienes cuenta? <a onClick={handleRegClick}>Registrate </a></p>

                </div>
            </div>
        </div>
    )


}
export default Login;