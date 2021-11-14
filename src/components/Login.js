import React from 'react';
// import ReactDOM from 'react-dom';
// import Home from './Home';
import { useHistory } from "react-router-dom";
function Login() {
    let history = useHistory();
    const handlpushHistory=()=>{
        history.push('/home');
    }

    const handlListClient=()=>{
        history.push('/listclient');
    }
    
    

    return (


        <div className="col-6 pb-2">
            <div className="row p-5 mx-auto">
                <div className='cointainer'>
                    <h3 className="justify-content-center">Obten tu <span className="lyrics-color-primary">seguro ahora</span></h3>
                    <h5 className="lyrics-color-secondary">Ingresar los datos para comenzar</h5>
                </div>

                <form>
                    <div className='cointainer'>
                        <div className="row p-2">
                            <div className="col-auto">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <select defaultValue={'DNI'} className="form-control form-control-lg">
                                            <option value="DNI">DNI </option>
                                            <option value="RUC">RUC</option>
                                        </select>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder="Nro Documento" />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-6 auto">
                                <input type="date" className="form-control form-control-lg" placeholder="Fecha Nacimiento" />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-6 auto">
                                <input type="text" className="form-control form-control-lg" placeholder="Celular" />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-7 auto">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"  id="invalidCheck2" required />
                                    <label className="form-check-label lyrics-color-secondary" htmlFor="invalidCheck2">
                                        Acepto la <span className="lyrics-text-decoration cursor-pointer"> Politica de Proteccion de Datos Personales y los Terminos y Condiciones. </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-7 auto">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"  id="invalidCheck3" required />
                                    <label className="form-check-label lyrics-color-secondary" htmlFor="invalidCheck3">
                                        Acepto la <span className="lyrics-text-decoration cursor-pointer"> Politica de Envio de Comunicaciones Comerciales. </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col-7 auto">
                                <button type="button" onClick={handlpushHistory} className="btn btn-primary btn-lg">COMENCEMOS</button>
                            </div>
                            <div className="col-7 px-5">
                                 <span  onClick={handlListClient} className="lyrics-text-decoration cursor-pointer lyrics-color-secondary"> Lista de cliente </span>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login;
