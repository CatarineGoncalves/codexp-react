
import React from 'react';
import { Link } from 'react-router-dom';

function SlidebarAdm (){
    return(

        <nav class="navbar-primary">
        <a href="#" class="btn-expand-collapse">Logout<span class="glyphicon glyphicon-menu-left"></span></a>
        <ul class="navbar-primary-menu">
            <li>
                <Link to="/administrador-aprovar" onclick="menu('pendentes')"><span class="glyphicon glyphicon-list-alt"></span><span id="pendentes" class="nav-label">Eventos Pendentes</span></Link>
                {/* <Link to="/sobre">Ir para a página sobre \o/ */}
                <Link to ="/administrador-apadrinhar" onclick="menu('aprovados')"><span class="glyphicon glyphicon-envelope"></span><span id="aprovados" class="nav-label">Eventos Aprovados</span></Link>
                <Link to ="/administrador" onclick="menu('apadrinhados')"><span class="glyphicon glyphicon-cog"></span><span id="apadrinhados" class="nav-label">Eventos Apadrinhados</span></Link>
            </li>
        </ul>
    </nav>

    );
}

export default SlidebarAdm;