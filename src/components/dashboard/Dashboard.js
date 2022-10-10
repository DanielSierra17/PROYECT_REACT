import { Link } from 'react-router-dom';
import señora from '../../img/men1.jpg';
import logodash from '../../img/Hotelia horizontal blanco.svg';
import axios from 'axios';
import { Card } from "react-bootstrap";

function Dashboard({ usuario, setUplist, upList, handleClose, handleOpen, setDataModal }) {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const handleEdit = () => {
        // handleOpen();
        setDataModal(usuario);
    }

    return (

        <div className="col-4 mb-3">
            <Card>
                <Card.Img variant="top" src={usuario.foto} className="img-card" />
                <Card.Body>
                    <Card.Title className="text-center">{usuario.nombre} {usuario.apellido}</Card.Title>
                    <Card.Text>
                        <strong>Tipo Documento: </strong>{usuario.tipodoc}<br />
                        <strong>No. Documento: </strong>{usuario.numdoc}<br />
                        <strong>Perfil: </strong>{usuario.perfil}
                    </Card.Text>
                    <button className="btn btn-warning me-2" onClick={handleEdit}>Editar</button>
            </Card>
        </Card.Body>
        </div >

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
                        <div class="fond"><i class="fa-sharp fa-solid fa-magnifying-glass"></i><Link to="/consultar">Consultar</Link></div>
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
                                    <label for="tipodoc">Tipo de documento</label>
                                    <select name="select">
                                        <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                        <option value="Cédula de extranjería">Cédula de extranjería</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="fnacimiento">Fecha de nacimiento</label>
                                    <input id="fnacimiento" name="fnacimiento" type="date" value={usuario.fnacimiento} />
                                </div>
                                <div>
                                    <label for="nombre">Nombre</label>
                                    <input id="nombre" name="nombre" type="text" value={usuario.nombre} />
                                </div>
                                <div>
                                    <label for="genero">Género</label>
                                    <select name="select">
                                        <option value="Mujer">Mujer</option>
                                        <option value="Hombre">Hombre</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="email">Email</label>
                                    <input id="email" name="email" type="email" value={usuario.email} />
                                </div>

                                <div class="container-buttons">
                                    <button type="submit" onClick={handleEdit}>Actualizar</button>
                                </div>

                                <div class="container-password">
                                    <div>
                                        <label for="password">contraseña</label>
                                        <input type="password" name="password" id="password" value={usuario.password} />
                                    </div>
                                </div>

                                <div class="container-buttons">
                                    <button type="submit">Cambiar</button>
                                </div>
                            </div>

                            <div class="subcontainer-columns">
                                <div>
                                    <label for="_id">Número de documento</label>
                                    <input type="number" name="_id" id="_id" value={usuario._id} />
                                </div>
                                <div>
                                    <label for="apellido">Apellido</label>
                                    <input type="text" name="apellido" id="apellido" value={usuario.apellido} />
                                </div>
                                <div>
                                    <label for="paisorigen">País de origen</label>
                                    <input type="text" name="paisorigen" id="paisorigen" value={usuario.paisorigen} />
                                </div>
                                <div>
                                    <label for="telefono">Telefono</label>
                                    <input type="number" name="telefono" id="telefono" value={usuario.telefono} />
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