import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login/login.js';
import crieseuevento from './pages/crieseuevento/crieseuevento.js';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path='/login' component={Login}/>
                <Route path='/criandoevento' component={crieseuevento}/>
            </Switch>
        </div>
    </Router>
)
        
        
        
        
        
        ReactDOM.render(Rotas, document.getElementById('root'));
        
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
