import { Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function Card_Usuario({ users, setUplist, upList, handleClose, handleOpen, setDataModal }) {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const handleDelete = async () => {

        Swal.fire({
            title: 'Está seguro que desea eliminar este registro?',
            text: "No puedes revertir está acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Sí, Bórralo!'
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`${url}/${users._id}`).then((response) => {
                    console.log(response);

                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `El estudiante ha sido eliminado exitosamente!`,
                            'success'
                        )
                        setUplist(!upList);
                    } else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al eliminar el estudiante!',
                            'error'
                        )
                    }
                });
            }
        })
    }

    const handleEdit = () => {
        handleOpen();
        setDataModal(users);
    }

    return (
        <div className="col-4 mb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={users.img} className="img-card" />
                <Card.Body>
                    <Card.Title className="text-center">{users.nombre} {users.apellido}</Card.Title>
                    <Card.Text>
                        <strong>Tipo Documento: </strong>{users.tipodoc}<br />
                        <strong>No. Documento: </strong>{users.numdoc}<br />
                    </Card.Text>
                    <button className="btn btn-primary me-2" onClick={handleEdit}><i class="fa-solid fa-user-pen"></i> Editar</button>
                    <button className="btn btn-danger" onClick={handleDelete}><i class="fa-solid fa-trash"></i> Eliminar</button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Card_Usuario;