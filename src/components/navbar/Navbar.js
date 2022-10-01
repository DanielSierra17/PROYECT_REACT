import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Hotelia horizontal blanco.svg";
import { useState } from "react";

function Navbar() {
    const [abrirMenu, setAbrirMenu] = useState(false)

    function Menu() {
        if (abrirMenu === false) {
            setAbrirMenu(true)
        }
        else if (abrirMenu === true) {
            setAbrirMenu(abrirMenu)
        }
    }

    return (
        <nav>
            <div class="logo">
                <img src={logo} alt="Hotelia horizontal blanco"></img>
                <i class="fa-solid fa-bars hamburguer" onClick={() => {Menu()}}></i>
            </div>

            <div className={abrirMenu ? 'menu abrir' : abrirMenu === false ? 'menu outside' : 'Menu'}>
                <Link href="#" class="item">Inicio</Link>
                <Link href="#" class="item">Ubícanos</Link>
                <Link href="#" class="item">Opiniones</Link>
                <hr class="menu-hr" noshade="" />
                <Link to="/login" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></Link>
            </div>
        </nav>
    );
}

export default Navbar;