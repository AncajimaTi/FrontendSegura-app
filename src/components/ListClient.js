import React,{useEffect} from 'react'
import { UseFetchPost } from '../hooks/UseFetchPost';
import { UseFetchGet } from '../hooks/UseFetchGet';

const ListClient = () => {
    const [Respuesta] = UseFetchGet("http://localhost:3085/programming-languages/list/client");
    const { data } = Respuesta;

   
    const [ handleDeleteClient,resp ] = UseFetchPost({
        apellido_materno: "",
        apellido_paterno: "",
        cobertura: "",
        doc_number: "",
        fecha_nacimiento: "",
        genero: "",
        idcliente: "",
        idplan: "",
        name_plan: "",
        nombre: "",
        segura: "",
    });
    
    useEffect(() => {
        console.log("cambio")
    }, [handleDeleteClient]);



    console.log(resp,"resp");
    return (
        <div className="col-5 pt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((itemClient,i) => (
                            <tr key={itemClient.idcliente} >
                                <td >{i+1}</td>
                                <td>{itemClient.nombre}</td>
                                <td>{itemClient.apellido_paterno} {itemClient.apellido_materno}</td>
                                <td>{itemClient.name_plan}</td>
                                <td><button type="button" onClick={()=>handleDeleteClient(itemClient)} className="btn btn-danger">Borrar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListClient;
