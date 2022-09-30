import { Link } from "react-router-dom";
import logo from "../../img/Hotelia horizontal blanco.svg";

function Nav() {
    return (
        <nav class="nav-home">
            <div class="logos">
                <img class="logosss" src={logo} alt=""/>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="menu">
                <a href="index.html" class="item">Inicio</a>
                <a href="#location" class="item">Ubícanos</a>
                <a href="#opinion" class="item">Opiniones</a>
                <hr class="menu-hr" noshade="" />
                <Link to="/dashboard" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></Link>
            </div>
        </nav>
    );
}

export default Nav;