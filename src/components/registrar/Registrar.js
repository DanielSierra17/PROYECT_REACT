import logo from './Hotelia horizontal blanco.svg';
import "./Registrar.css";

function Registrar() {
    return (
        <body className="back-reg">
            <nav class="container-information">
                <img src={logo} class="container-image" alt="" />
                <h1 class="container-tittle">Eres más que bienvenido</h1>
            </nav>

            <div class="container-register">
                <div class="container-name">
                    <h1>Regístrate</h1>
                </div>
                <div class="container-columns">
                    <form method="" class="container-form">
                        <div class="column">
                            <div class="columns">
                                <div>
                                    <label>Tipo de documento</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Nombre</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" />
                                </div>

                                <div>
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                                <div>
                                    <label>País de origen</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>contraseña</label>
                                    <input type="password" />
                                </div>
                            </div>
                            <div class="columns">
                                <div>
                                    <label>Número de documento</label>
                                    <input type="number" />
                                </div>
                                <div>
                                    <label>Apellido</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label for="gender">Género</label>
                                    <div class="gender">
                                        <input type="radio">Mujer</input>
                                        <input type="radio">Hombre</input>
                                        <input type="radio">Otro</input>
                                    </div>
                                </div>
                                <div>
                                    <label>Telefono</label>
                                    <input type="number" />
                                </div>
                                <div>
                                    <label>Foto</label>
                                    <input type="text" placeholder="Seleccionar Archivo" />
                                </div>
                                <div>
                                    <label>Confirmar contraseña</label>
                                    <input type="password" />
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" id="btn-modal" />
                        <label for="btn-modal" class="lbl-modal">Acepta Terminos y Condiciones</label>
                        <div class="container-button">
                            <button type="submit"><a href="login.html">Ingresar</a></button>
                        </div>

                        <div class="modal">
                            <div class="contenedor">
                                <header>Terminos y Condiciones</header>
                                <label for="btn-modal">X</label>
                                <div class="contenido">
                                    <p>
                                        Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las
                                        leyes por las que nos regimos y
                                        determinados aspectos que siempre hemos creido que son ciertos. Por ello, estos Términos
                                        del Servicio ayudan a definir
                                        la relación que tiene Google contigo cuando interactúas con nuestros servicios, Por
                                        ejemplo, estos términos incluyen las
                                        siguientes secciones:
                                    </p>
                                    <p>
                                        Qué puedes esperar de nosotros, donde se describe como proporcionamos y desarrollamos
                                        nuestros servicios. Lo que
                                        esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.
                                    </p>

                                    <button>Aceptar</button>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Registrar;