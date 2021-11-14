import React from 'react';
import ReactDOM  from 'react-dom';
import AppRouter from './routers/AppRouter';
// import  './assets/css/App.scss' ;
import '../src/assets/css/style.css';

ReactDOM.render(
            <AppRouter />,
            document.getElementById('root'));