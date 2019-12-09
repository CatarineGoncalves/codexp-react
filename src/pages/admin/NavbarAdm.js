import React from 'react';
// import logo from '../assets/img/logo.png';


function NavbarAdm (){
    return(

        <nav class="navbar navbar-inverse navbar-global navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                {/* <span class="home-logo">
                            <a href="">
                                    <img class="home-logo-img animated flip" src={logo} alt="imagm do logo square events"/>
                                </a>
                      </span> */}
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-user navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Administrador</a></li>
                    <li><a href="#about"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                </ul>
            </div>
            {/* <!--/.nav-collapse --> */}
        </div>
    </nav>

    );
}

export default NavbarAdm;