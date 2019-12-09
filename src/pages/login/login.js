
import React, { Component } from 'react';
import './login.css';
// import Header from '../../components/Header/Header'



class Login extends Component {
    render() {
        return (
            <div>
                <div class="div_tudo">
                    
                    {/* <Header /> */}

                    <div class="cont">
                        <div class="second-column">
                            <h2 class="title title-second">Se cadastre</h2>
                            <p class="description description-second">e faça teu evento gratuito conosco!</p>
                            <form class="form">
                                <label class="label-input" for="">
                                    <i class="far fa-user icon-modify"></i>
                                    <input type="text" placeholder="Nome Completo" />
                                </label>

                                <label class="label-input" for="">
                                    <i class="far fa-user icon-modify"></i>
                                    <input type="text-cmm" placeholder=" Nome da Comunidade" />
                                </label>

                                <label class="label-input" for="">
                                    <i class="far fa-envelope icon-modify"></i>
                                    <input type="email" placeholder="Email" />
                                </label>

                                <label class="label-input" for="">
                                    <i class="fas fa-lock icon-modify"></i>
                                    <input type="password" placeholder="Senha" />
                                </label>

                                <label class="label-input" for="">
                                    <i class="fas fa-lock icon-modify"></i>
                                    <input type="password" placeholder="Confirme sua senha" />
                                </label>


                                <button class="btn btn-second">Cadastre</button>
                            </form>
                        </div>
                    </div>

                    <div class="second-column">
                        <h2 class="title title-second">Faça seu login aqui</h2>

                        <p class="description description-second">Não possui cadastro? Faça aqui agora</p>
                        <form class="form">

                            <label class="label-input" for="">
                                <i class="far fa-envelope icon-modify"></i>
                                <input type="email" placeholder="Email" />
                            </label>

                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"></i>
                                <input type="senha" placeholder="Senha" />
                            </label>

                            <a class="password" href="#">esqueceu a senha?</a>
                            <button class="btn btn-second">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login