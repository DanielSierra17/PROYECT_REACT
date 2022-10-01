import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Hotelia horizontal blanco.svg";

function Navbar() {
    return (
        <nav>
            <div class="logo">
                <img src={logo} alt="Hotelia horizontal blanco"></img>
                <i class="fa-solid fa-bars hamburguer"></i>
            </div>

            <div class="menu outside">
                <a href="#" class="item">Inicio</a>
                <a href="#" class="item">Ubícanos</a>
                <a href="#" class="item">Opiniones</a>
                <hr class="menu-hr" noshade="" />
                <Link to="/login" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></Link>
            </div>
        </nav>
    );
}

export default Navbar;