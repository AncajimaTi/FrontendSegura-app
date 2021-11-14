import React from 'react'
import { UseFetchClient } from '../hooks/UseFetchClient';
import { useHistory } from "react-router-dom";
const Home = () => {

    let history = useHistory();
    const [client,,handleInputChange,handlecheckChange,handleSumbitChange,nombre] = UseFetchClient({
        doc_number:'',
        nombre:'',
        apellido_paterno:'',
        apellido_materno:'',
        fecha_nacimiento:'',
        genero:'',
        segura:'',
        idplan:"",
    })

    // const handleInputChange = ({target})=>{
    //     setFormstate({
    //         ...Formstate,
    //         [target.name]:target.value
    //     })
    // }

    // const handlecheckChange=({currentTarget})=>{
    //     // console.log(e);
    //     setFormstate({
    //         ...Formstate,
    //         [currentTarget.name]:currentTarget.value
    //     })
    // }

    // const handleSumbitChange=(e)=>{
    //     e.preventDefault();
    // }
    // onSubmit={handleSumbitChange}

    const handleRoutePlan=()=>{
        // history.push('/plan',{...client});
        history.push( {
            pathname: '/plan',
            search: '?query=abc',
            state: {...client}
          });
       
    }




    return (
        <div className="col-5 pt-3">
           
            <div className="row pb-2 mx-auto">
                <h3>Hola,<span className="lyrics-color-primary">{nombre}</span></h3>
                <p className="lyrics-color-secondary">Valida que los datos sean correctos.</p>
            </div>
            <div className="row mx-auto">
                <p className="lyrics-color-secondary">Datos Personales del Titular</p>
            </div>
            <form >
                <div className='cointainer'>
                    <div className="row p-2">
                        <div className="col-auto">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select className="form-control form-control-lg">
                                        <option>DNI </option>
                                        <option>RUC</option>
                                    </select>
                                </div>
                                <input type="text" name="doc_number" className="form-control form-control-lg" placeholder="Nro Documento" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-8 auto">
                            <input type="text" name="nombre" className="form-control form-control-lg" placeholder="Nombres" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-8 auto">
                            <input type="text" name="apellido_paterno" className="form-control form-control-lg" placeholder="Apellido Paterno" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-8 auto">
                            <input type="text"  name="apellido_materno" className="form-control form-control-lg" placeholder="Apellido Materno" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-8 auto">
                            <input type="date" name="fecha_nacimiento" className="form-control form-control-lg" placeholder="Fecha Nacimiento"  onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <label className="lyrics-color-secondary">Genero</label>
                        <div className="col-8 auto">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="genero" value="1"  onChange={handlecheckChange} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Masculino</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="genero" value="0" onChange={handlecheckChange} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Femenino</label>
                            </div>
                        </div>

                    </div>
                    <div className="row p-2">
                        <label className="lyrics-color-secondary">¿A quién vamos a asegurar?</label>
                        <div className="col-8 auto">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="segura" value="1" id="inlineRadio3" onChange={handlecheckChange}  />
                                <label className="form-check-label" htmlFor="inlineRadio3">Solo a mi</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="segura"  value="1" id="inlineRadio4"  onChange={handlecheckChange} />
                                <label className="form-check-label" htmlFor="inlineRadio4">A mi y a mi familia</label>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3 flex-end">
                        <div className="col-7 auto">
                            <button type="button" onClick={handleRoutePlan} className="btn btn-secondary btn-lg">CONTINUAR {" > "} </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Home
