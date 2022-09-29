import { Link } from "react-router-dom";
import "./Login.css"
import logo from "./Hotelia horizontal negro.svg";
import wave from "./wave.svg";

function Login() {
    return (
        <body class="background">
            <div class="container-form">
                <img src={wave} alt="" />

                <img class="container-image" src={logo} alt="Hotelia horizontal negro" />
                <div class="container-icons"><i class="fa-solid fa-user"></i></div>

                <span>Usuario</span>
                <input type="text" class="container-input" />

                <span>Contraseña</span>
                <input type="password" class="container-input" />

                <button type="submit"><Link to="/dashboard">Ingresar</Link></button>

                <p>¿No tienes una cuenta? <Link to="/registrar" class="color-message">Regístrate aquí</Link></p>
            </div>
        </body>
    );
}
export default Login;