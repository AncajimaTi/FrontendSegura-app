import { useState } from "react"
import Swal from 'sweetalert2'

export const UseFetchClient = (initialState={}) => {
    
    const [client, setclient] = useState(initialState)
    
    const {nombre,idplan}= client;


    const handleInputChange = ({target})=>{
        setclient({
            ...client,
            [target.name]:target.value
        })
    }

    const handlecheckChange=({currentTarget})=>{
        // console.log(e);
        setclient({
            ...client,
            [currentTarget.name]:currentTarget.value
        })
    }


    const handleSumbitChange=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3085/programming-languages/create/client', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(client)
        }).then(resp=>resp.json())
        .then(({message})=>{
           
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 1500
              })
        });
    }


    const handleCheckPlan=({currentTarget})=>{
        setclient({
            ...client,
            [currentTarget.name]:currentTarget.value
        })
    }



    
    

    return [client,setclient,handleInputChange,handlecheckChange,handleSumbitChange,nombre,idplan,handleCheckPlan];
}
