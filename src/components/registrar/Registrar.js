import { Link } from "react-router-dom";
import logoform from "../../img/Hotelia horizontal blanco.svg";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
// import { useHistory } from 'react-router';

function Registrar() {

    // const history = useHistory();

    const [data, setData] = useState({
        _id: "", tipodoc: "", nombre: "", apellido: "", fnacimiento: "",
        genero: "", email: "", telefono: "", paisorigen: "", password: "", tipouser: "huesped", img: ""
    });

    const handleChange = ({ target }) => {

        setData({
            ...data, [target.name]: target.value
        })
    }

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);

        if (response.status === 201) {

            Swal.fire(
                'Registro Fallido!',
            )
            // history.push("/");

        } else {
            Swal.fire(
                'Registro Exitoso!',
            )
        }
    }

    return (
        <body class="dash">

            <nav class="slider-register">
                <img src={logoform} alt="" />
                <h1>Eres más que bienvenido</h1>
                <Link to="/" class="item"><button class="salir-register"><i class="fa-solid fa-arrow-right-from-bracket"></i>Salir</button></Link>
            </nav>

            <div class="form-register">
                <div class="registrate">
                    <h1>Registrate</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div class="formulario">
                        <div class="columna">
                            <div>
                                <label for="tipodoc">Tipo de documento</label>
                                <select name="select" onChange={handleChange}>
                                    <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                                </select>
                            </div>
                            <div>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" id="nombre" value={data.nombre} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="fnacimiento">Fecha de nacimiento</label>
                                <input type="date" name="fnacimiento" id="fnacimiento" value={data.fnacimiento} onChange={handleChange} />
                            </div>

                            <div>
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="paisorigen">Pais de origen</label>
                                <input type="text" name="paisorigen" id="paisorigen" value={data.paisorigen} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="password">Contraseña</label>
                                <input type="password" name="password" id="password" value={data.password} onChange={handleChange} />
                            </div>
                        </div>
                        <div class="columna">
                            <div>
                                <label for="_id">Numero de documento</label>
                                <input type="number" name="_id" id="_id" value={data._id} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="apellido">Apellido</label>
                                <input type="text" name="apellido" id="apellido" value={data.apellido} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="genero">Genero</label>
                                <select name="select" onChange={handleChange}>
                                    <option value="Mujer">Mujer</option>
                                    <option value="Hombre">Hombre</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div>
                                <label for="telefono">Telefono</label>
                                <input type="number" name="telefono" id="telefono" value={data.telefono} onChange={handleChange} />
                            </div>
                            <div class="foto">
                                <label for="img">Foto</label>
                                <input type="file" name="img" id="img" value={data.img} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Confirmar contraseña</label>
                                <input type="password" />
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="btn-modal" />
                    <label for="btn-modal" class="lbl-modal">Terminos y condiciones</label>

                    <div class="boton">
                        <button type="submit">Registrar</button>
                        <Link to="/login">Ingresar</Link>
                    </div>

                    <div class="modal">
                        <div class="contenedor-register">
                            <header>Terminos y Condiciones</header>
                            <label for="btn-modal">X</label>
                            <div class="contenido">
                                <p>
                                    Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las leyes por las que nos regimos y
                                    determinados aspectos que siempre hemos creido que son ciertos. Por ello, estos Términos del Servicio ayudan a definir
                                    la relación que tiene Google contigo cuando interactúas con nuestros servicios, Por ejemplo, estos términos incluyen las
                                    siguientes secciones:
                                </p>
                                <p>
                                    Qué puedes esperar de nosotros, donde se describe como proporcionamos y desarrollamos nuestros servicios. Lo que
                                    esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.
                                </p>

                                <button>Aceptar</button>
                            </div>


                        </div>
                    </div>
                </form>
            </div>

        </body>
    );
}

export default Registrar;