import { Link } from 'react-router-dom';
import señora from '../../img/men1.jpg';
import logodash from '../../img/Hotelia horizontal blanco.svg';

function Dashboard() {
    return (
        <div class="bodydash">
            <nav class="navdash">
                <div class="log">
                    <img src={logodash} alt="" />
                    <div class="container-username">
                        <h3>Angie Vargas</h3>
                        <p>Angievargas2@gmail.com</p>
                    </div>
                </div>
                <div class="container-lateral-bar">
                    <div class="icons-dash">
                        <div class="fond"><i class="fa-solid fa-bed"></i><Link to="#">Habitaciones</Link></div>
                        <div class="fond"><i class="fa-solid fa-bell-concierge"></i><Link to="#">Reservas</Link></div>
                        <div class="fond"><i class="fa-solid fa-bed"></i><Link to="#">Habitaciones</Link></div>
                        <div class="fond"><i class="fa-solid fa-bell-concierge"></i><Link to="#">Habitaciones</Link></div>
                        <div class="fond"><i class="fa-solid fa-magnifying-glass"></i><Link to="/consultar">Consultar</Link></div>
                        <div class="fond"><i class="fa-solid fa-user-pen"></i><Link to="/actualizar">Actualizar</Link></div>
                    </div>
                </div>
                <div class="container-exit">
                    <i class="fa-solid fa-right-from-bracket"></i><Link to="/">Cerrar sesión</Link>
                </div>
            </nav>
            <section class="container-dashboard">
                <div class="container-message">
                    <h1>Bienvenido, Angie Vargas</h1>
                </div>

                <div class="container-information">
                    <div class="container-photo">
                        <div class="container-images"><img src={señora} alt="" /></div>
                        <div class="icons-two">
                            <i class="fa-solid fa-file-export"></i>
                        </div>
                        <div class="icons-three">
                            <i class="fa-solid fa-file-export"></i>
                            <i class="fa-solid fa-file-image"></i>
                        </div>
                        <Link to="#">Cambiar contraseña</Link>
                    </div>
                    <form class="container-dash">
                        <div class="container-columns">
                            <div class="subcontainer-columns">
                                <div>
                                    <label>Tipo de documento</label>
                                    <input type="text" value="Cedula de ciudadania" />
                                </div>
                                <div>
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" value="1976-08-10" />
                                </div>
                                <div>
                                    <label>Nombre</label>
                                    <input type="text" value="Angie Camila" />
                                </div>
                                <div>
                                    <label>Género</label>
                                    <div id="container-radio">
                                        <input type="radio" /><label>Mujer</label>
                                        <input type="radio" /><label>Hombre</label>
                                        <input type="radio" /><label>Otro</label>
                                    </div>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type="email" value="Angievargas2@gmail.com" />
                                </div>

                                <div class="container-buttons">
                                    <button type="submit">Actualizar</button>
                                </div>

                                <div class="container-password">
                                    <div>
                                        <label>contraseña</label>
                                        <input type="password" />
                                    </div>
                                </div>

                                <div class="container-buttons">
                                    <button type="submit">Cambiar</button>
                                </div>
                            </div>

                            <div class="subcontainer-columns">
                                <div>
                                    <label>Número de documento</label>
                                    <input type="number" value="1025417456" />
                                </div>
                                <div>
                                    <label>Apellido</label>
                                    <input type="text" value="Vargas Pinzon" />
                                </div>
                                <div>
                                    <label>País de origen</label>
                                    <input type="text" value="Colombia" />
                                </div>
                                <div>
                                    <label>Telefono</label>
                                    <input type="number" value="3135207460" />
                                </div>

                                <div class="subcontainer-password">
                                    <div>
                                        <label>Confirmar contraseña</label>
                                        <input type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    );
}

export default Dashboard;