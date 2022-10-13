import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./Consultas.css";

function Consultas() {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    // /*4. agregamos otra constante al useState para actualizar el listado después de eliminar */
    // const [upList,setUplist]=useState([false]);

    // /*5. agregamos otra constante al useState para actualizar el estado del modal */
    // const [show,setShow]=useState(false);

    // const handleClose=()=>{setShow(false);}
    // const handleOpen=()=>{setShow(true);}

    // /*6. Estado para obtener los datos de cada registro a editar*/
    // const [dataModal, setDataModal] = useState({})


    // const handleChangeModal=({target})=>{
    //     setDataModal({
    //         ...dataModal,
    //         [target.name]: target.value
    //     })
    // }

    const [list, setList] = useState([]);

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
            console.log(response.data);
        })
    }, [])

    const [abrirModal, setAbrirModal] = useState(false)

    function Modal() {
        if (abrirModal === false) {
            setAbrirModal(true)
        }
        else if (abrirModal === true) {
            setAbrirModal(false)
        }
    }


    return (
        <body className='const-cont'>
            <div className='container-const'>
                <Table striped hover >
                    <thead class="bg-info">
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
                            <td>Acción</td>
                        </tr>
                    </thead>
                    {
                        list.map((list, index) => (
                            <tbody class="bg-light">
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
                                        <Button variant='success' onClick={() => { Modal() }}><i class="fa-solid fa-pen"></i> Editar</Button>
                                        <Button variant='danger'><i class="fa-solid fa-trash"></i> Eliminar</Button>
                                    </td>
                                </tr>
                            </tbody>))
                    }
                </Table>
            </div>

            <div className={abrirModal ? 'modal-consult abrir' : abrirModal === false ? 'modal-consult outside-modal' : 'modal-consult'}>
                <div class="contenidoModal">
                    <span class="cerrarModal" onClick={() => { Modal() }}><i class="fa-solid fa-xmark"></i></span>
                    <h2>Actualizar Datos</h2>

                    <div class="mb-3">
                        <label for="" class="form-label">Digite El Lado Del Cuadrado</label>
                        <input type="number" class="form-control" id="lc"
                            aria-placeholder="Ingrese el valor del lado del cuadrado" />
                    </div>

                    <center>
                        <button type="submit" class="btn btn-success"><i class="fa-solid fa-user-pen"></i> Actualizar</button>
                    </center>

                </div>
            </div>

        </body>
    );
}

export default Consultas;
