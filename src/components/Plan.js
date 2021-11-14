import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { UseFetchGet } from '../hooks/UseFetchGet';
import { UseFetchClient } from '../hooks/UseFetchClient';
import { createBrowserHistory } from 'history';
import img from '../assets/img/Illustration.png';

const Plan = () => {

    const [Respuesta] = UseFetchGet("http://localhost:3085/programming-languages/listplan");
    const history = createBrowserHistory();
    // Get the current location.
    const location = history.location;
    // Listen for changes to the current location.
    const unlisten = history.listen((location, action) => {
        // location is an object like window.location
        console.log(action, location.pathname, location.state);
        // setclient({...location.state})
    });

    const [, setclient, , handlecheckChange, handleSumbitChange, , idplan, handleCheckPlan] = UseFetchClient({...location.state})
    console.log(location, unlisten)

    return (
        <div className="col-5 pt-3">
            <form onSubmit={handleSumbitChange}>
                <div className="row pb-2 mx-auto">
                    <h3>Elige <span className="lyrics-color-primary">tu protección</span></h3>
                    <p className="lyrics-color-secondary">Selecciona tu plan de salud ideal.</p>
                </div>
                <div className="row p-2">
                    <div className="col-4 auto">
                        <div className="card">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input-plan flex-end" type="radio" name="idplan" id="inlineRadio1" value="1" onChange={handlecheckChange} />
                            </div>
                            <h6 className="card-title p-2">BASICO</h6>
                            <h3 className="card-title px-4">S/.160</h3>
                            <p className="card-text p-2">mensual</p>
                        </div>
                    </div>
                    <div className="col-4 auto">
                        <div className="card">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input-plan flex-end" type="radio" name="idplan" id="inlineRadio1" value="2" onChange={handleCheckPlan} />
                            </div>
                            <h6 className="card-title p-2">AVANZADO</h6>
                            <h3 className="card-title px-4">S/.200</h3>
                            <p className="card-text p-2">mensual</p>
                        </div>
                    </div>
                </div>
                <div className="row p-2 mx-auto">
                    {

                        (idplan == "")
                            ?
                            <h5>Selecciones un Plan</h5>
                            :
                            (idplan === "1")
                                ?
                                (
                                    <>
                                        <div className="card">
                                            <div className="card-header">
                                                Cuentas con estos Beneficios:
                                            </div>
                                            <div className="card-body">
                                                <div className="row g-0">
                                                    <div className="col-8">
                                                        <h5 className="card-title">Cobertura Maxima</h5>
                                                        <h5 className="card-text">S/ 1MM </h5>
                                                        <span className="badge bg-success">Plan Basico</span>

                                                    </div>
                                                    <div className="col-4">
                                                        <img src={img} width="100px" height="100px" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <p className="lyrics-color-secondary">Lima(Zona de cobertura)</p>
                                                <p className="lyrics-color-secondary">+30 clinicas (en red afiliado)</p>
                                                <p className="lyrics-color-secondary"><del>Medico a domicilio</del></p>
                                                <p className="lyrics-color-secondary"><del>Chequedo preventivos</del></p>
                                                <p className="lyrics-color-secondary"><del>Reembolso nacional</del></p>
                                                <p className="lyrics-color-secondary"><del>Reembolso internacional</del></p>
                                            </div>
                                            <div className="row p-3 flex-end">
                                                <div className="col-7 auto">
                                                    <button type="submit" className="btn btn-primary btn-lg">COMPRAR PLAN </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )
                                :
                                (
                                    <>
                                        <div className="card">
                                            <div className="card-header">
                                                Cuentas con estos Beneficios:
                                            </div>
                                            <div className="card-body">
                                                <div className="row g-0">
                                                    <div className="col-8">
                                                        <h5 className="card-title">Cobertura Maxima</h5>
                                                        <h5 className="card-text">S/ 1MM </h5>
                                                        <span className="badge bg-success">Plan Basico</span>

                                                    </div>
                                                    <div className="col-4">
                                                        <img src={img} width="100px" height="100px" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <p className="lyrics-color-secondary">Lima(Zona de cobertura)</p>
                                                <p className="lyrics-color-secondary">+30 clinicas (en red afiliado)</p>
                                                <p className="lyrics-color-secondary">Medico a domicilio</p>
                                                <p className="lyrics-color-secondary">Chequedo preventivos</p>
                                                <p className="lyrics-color-secondary"><del>Reembolso nacional</del></p>
                                                <p className="lyrics-color-secondary"><del>Reembolso internacional</del></p>
                                            </div>
                                            <div className="row p-3 flex-end">
                                                <div className="col-7 auto">
                                                    <button type="submit" className="btn btn-primary btn-lg">COMPRAR PLAN </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )
                    }
                </div>
            </form>


        </div>
    )
}

export default Plan;
