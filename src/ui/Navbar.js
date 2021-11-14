import React from 'react'
import '../assets/css/style.css';
import segurity from '../assets/img/gl_shield.png';
import phone from '../assets/img/gl_mobile.png';

export const Navbar = () => {
    return (
        <div className="col-6 p-5">
            <div className="row p-5 mx-auto">
                <div className='cointainer'>
                    <h1 className="lyrics-color-white-opacity">Seguro de</h1>
                    <h1 className="lyrics-color-white">Salud</h1>
                </div>

                <div className='cointainer p-5'>
                    <p className="p-1 lyrics-color-white"> <img src={segurity}  width="20px" height="20px"/> Cómpralo de manera fácil y rápida </p>
                    <p className="p-1 lyrics-color-white"> <img src={phone} width="20px" height="20px"/> Cotiza y compra tu seguro 100% digital </p>
                    <p className="p-1 lyrics-color-white"> <img src={segurity} width="20px" height="20px"/> Hasta S/. 12 millones de cobertura anual </p>
                    <p className="p-1 lyrics-color-white"> <img src={phone} width="20px" height="20px"/> Más de 300 clinicas en todo el Perú </p>
                </div>
                <div className='cointainer p-5'>
                    <p className="lyrics-color-white-opacity"> @2020 Rimac Seguros y Reaseguros.</p>
                </div>
            </div>
        </div>
    );
}