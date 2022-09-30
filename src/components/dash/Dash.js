import { Link, NavLink } from "react-router-dom";
import señora from "../../img/señora.jpg";
import logodash from "../../img/Hotelia horizontal blanco.svg";

function Dash() {
    return (
        <div>
            <nav class="navdash">
                <div class="fondito">
                    <div class="loguito">
                        <img class="logocompleto" src={logodash} alt="" />
                        <div class="datos">
                            <h4>Angie Vargas</h4>
                            <p class="parra">angievargas2@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="options">
                    <Link href="#" class="items"><i class="fa-solid fa-bed" ></i> Habitaciones</Link><br />
                    <Link href="#" class="items"><i class="fa-solid fa-bell-concierge" ></i> Reservas</Link><br />
                    <Link href="#" class="items"><i class="fa-solid fa-bed" ></i> Habitaciones</Link><br />
                    <Link href="#" class="items"><i class="fa-solid fa-bell-concierge" ></i> Reservas</Link><br />
                </div>
                <Link to="/" class="item"><button class="salir"><i class="fa-solid fa-arrow-right-from-bracket"></i>Salir</button></Link>
            </nav>
            <section class="information">
                <div class="information-image">
                    <img src={señora} alt="" />
                </div>
                <div class="information-title">
                    <h2>Bienvenida, Angie Vargas</h2>
                </div>
                <div class="information-text">
                    <div class="tipoid">
                        <label>Tipo de documento</label>
                        <br />
                        <input placeholder="Cédula de ciudadanía" type="text" />
                        <div class="id">
                            <label for="">Numero de documento</label>
                            <br />
                            <input placeholder="1025417456" type="text" />
                        </div>
                        <div class="name">
                            <label for="">Nombres</label>
                            <br />
                            <input placeholder="Angie Camila" type="text" />
                        </div>
                        <div class="last">
                            <label for="">Apellidos</label>
                            <br />
                            <input placeholder="Vargas Pinzón" type="text" />
                        </div>
                        <div class="date">
                            <label for="">Fecha nacimiento</label>
                            <br />
                            <input type="date" />
                        </div>
                        <div class="country">
                            <label for="">País de origen</label>
                            <br />
                            <input placeholder="Colombia" type="text" />
                        </div>
                        <div class="form-check">
                            <label for="">Genero</label>
                            <div class="genero">
                                <div class="men">
                                    <input type="radio" class="hombre" />
                                    <label for="hombre">Hombre</label>
                                </div>
                                <div class="woman">
                                    <input type="radio" class="mujer" checked />
                                    <label for="mujer">Mujer</label>
                                </div>
                                <input type="radio" class="otro" />
                                <label for="otro">Otro</label>
                            </div>
                        </div>
                        <div class="cel">
                            <label for="">Telefono de contacto</label>
                            <br />
                            <input placeholder="3125207460" type="text" />
                        </div>
                        <div class="mail">
                            <label for="">Email</label>
                            <br />
                            <input placeholder="angievargas2@gmail.com" type="text" />
                        </div>
                        <div class="actu">
                            <button class="cambiar">Actualizar</button>
                        </div>
                    </div>
                    <div>
                        <div class="pass">
                            <label for="">Contraseña</label>
                            <br />
                            <input type="password" />
                        </div>
                        <div class="confpass">
                            <label for="">Confirmar contraseña</label>
                            <br />
                            <input type="password" />
                        </div>
                        <div class="camb">
                            <button class="cambiar">Cambiar</button>
                        </div>
                        <div class="cambpass">
                            <button class="cambiarpass">Cambiar Contraseña</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dash;