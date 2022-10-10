import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Consultas.css';
import Button from 'react-bootstrap/Button';

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
                <div className='sub-container'>
                    {
                        list.map((list, index) => (
                            <Table table hover variant='light'>
                                <thead>
                                    <tr>
                                        <th class="bg-info">Número De Documento</th>
                                        <th class="bg-info">Tipo De Documento</th>
                                        <th class="bg-info">Nombre</th>
                                        <th class="bg-info">Apellido</th>
                                        <th class="bg-info">Fecha De Nacimiento</th>
                                        <th class="bg-info">Género</th>
                                        <th class="bg-info">Correo</th>
                                        <th class="bg-info">Teléfono</th>
                                        <th class="bg-info">País De Origen</th>
                                        <th class="bg-info">Contraseña</th>
                                        <th class="bg-info">Tipo De Usuario</th>
                                        <th class="bg-info">Imagen</th>
                                        <th class="bg-info">Acción</th>
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
                                        <td>
                                            <Button variant="warning"><i class="fa-sharp fa-solid fa-pen"></i></Button>
                                            <Button variant="danger"><i class="fa-solid fa-trash"></i></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>))
                    }
                </div>
            </div>
        </body>
    );
}

export default Consultas;
