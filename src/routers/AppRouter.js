import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import Home from '../components/Home';
import ListClient from '../components/ListClient';
import Login from '../components/Login';
import Plan from '../components/Plan';
import { Navbar } from '../ui/Navbar';

function AppRouter() {
    return (
        <>
            <Router>
                    <div className="row FondoImg">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/plan" component={Plan} />
                            <Route exact path="/listclient" component={ListClient} />
                        </Switch>
                    </div>
            </Router>
        </>
    );
}

export default AppRouter;
