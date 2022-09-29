import { Link } from "react-router-dom";
import "./Login.css"
import logo from "./Hotelia horizontal negro.svg";

function Login() {
    return (
        <div class="container-form">
            <div style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M-43.16,102.14 C157.73,250.17 241.82,-21.19 500.84,95.23 L500.00,0.00 L0.00,0.00 Z"
                    style="stroke: none; fill: #FFFFFF; border-radius: 3px;"></path>
            </svg></div>

            <img class="container-image" src={logo} alt="Hotelia horizontal negro" />
            <div class="container-icons"><i class="fa-solid fa-user"></i></div>

            <span>Usuario</span>
            <input type="text" class="container-input" />

            <span>Contraseña</span>
            <input type="password" class="container-input" />

            <button type="submit"><Link to="/dashboard">Ingresar</Link></button>

            <p>¿No tienes una cuenta? <Link to="/registrar" class="color-message">Regístrate aquí</Link></p>
        </div>
    );
}
export default Login;