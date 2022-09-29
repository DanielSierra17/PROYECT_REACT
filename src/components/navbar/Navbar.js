import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Hotelia horizontal blanco.svg";

function Navbar() {
    return (
        <nav>
            <div class="logo">
                <img src={logo} alt="Hotelia horizontal blanco.svg"></img>
                <i class="fa-solid fa-bars hamburguer"></i>
            </div>

            <div class="menu outside">
                <a href="index.html" class="item">Inicio</a>
                <a href="ubicanos.html" class="item">Ubícanos</a>
                <a href="opiniones.html" class="item">Opiniones</a>
                <hr class="menu-hr" noshade="" />
                <link to="login.html" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></link>
            </div>
        </nav>
    );
}

export default Navbar;