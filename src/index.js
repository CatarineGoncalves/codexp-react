import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login/login.js';
import crieseuevento from './pages/crieseuevento/crieseuevento.js';
import AdministradorApadrinhar from './pages/admin/AdministradorApadrinhar'
import AdministradorAprovar from './pages/admin/AdministradorAprovar'
import AdministradorVisualizar from './pages/admin/AdministradorVizualizar'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path='/login' component={Login}/>
                <Route path='/criandoevento' component={crieseuevento}/>

                <Route path='/administrador-apadrinhar' component={AdministradorApadrinhar}/>
                <Route path='/administrador-aprovar' component={AdministradorAprovar}/>
                <Route path='/administrador' component={AdministradorVisualizar}/>
            </Switch>
        </div>
    </Router>
)
        
        
        
        
        
        ReactDOM.render(Rotas, document.getElementById('root'));
        
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
