import { useState } from "react";
import Swal from 'sweetalert2'

export const UseFetchPost = (initialState) => {
    
    const [RespuestaDelete, setRespuestaDelete] = useState({resp:""});
    const {resp}=RespuestaDelete;

    const handleDeleteClient=(items)=>{
        fetch('http://localhost:3085/programming-languages/delete/client', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(items)
        }).then(resp=>resp.json())
        .then(({message})=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 1500
              })
            setRespuestaDelete({
                resp:message
            })
        });
        
    }

    return [handleDeleteClient,resp];

}
