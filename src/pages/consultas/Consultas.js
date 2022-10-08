import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import "./Consultas.css";

function Consultas() {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    const [list, setList] = useState([]);

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <body className='const-cont'>
        <div className='container'>
            {
                list.map((list, index) => (
                    <Table table hover variant='light'>
                        <thead class="table-primary">
                            <tr>
                                <td>Número De Documento</td>
                                <td>Tipo De Documento</td>
                                <td>Nombre</td>
                                <td>Apellido</td>
                                <td>Fecha De Nacimiento</td>
                                <td>Género</td>
                                <td>Correo</td>
                                <td>Teléfono</td>
                                <td>País De Origen</td>
                                <td>Contraseña</td>
                                <td>Tipo De Usuario</td>
                                <td>Imagen</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{list._id}</td>
                                <td>{list.tipodoc}</td>
                                <td>{list.nombre}</td>
                                <td>{list.apellido}</td>
                                <td>{list.fnacimiento}</td>
                                <td>{list.genero}</td>
                                <td>{list.email}</td>
                                <td>{list.telefono}</td>
                                <td>{list.paisorigen}</td>
                                <td>{list.password}</td>
                                <td>{list.tipouser}</td>
                                <td>{list.img}</td>
                            </tr>
                        </tbody>
                    </Table>))
            }
        </div>
        </body>
    );
}

export default Consultas;
