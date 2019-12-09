import React, { Component } from 'react'; // importando o react
import './crieseuevento.css'


class crieseuevento extends Component {
    render() {
        return (
            <div>
                <main className="main-crieseuevento">
                    <div className="formulario div-um">
                        <img src={require('../../assets/img/logo.png')} className="squareevents" alt="imagem de uma placa de madeira que é o simbolo da pagina" />
                        <h1 className="registro">Crie seu Evento</h1>

                        <div className="father-div">
                            <div className="textinput-crieseuevento">
                                <div className="">
                                    <p className="titulo-nome1">Nome do Evento: </p>
                                    <form className="form-botao" action="#">
                                        <input type="text" className="botao-um" />
                                    </form>
                                </div>

                                <div className="datetime-crieseuevento">
                                    <p className="titulo-nome4">Data</p>
                                    <form className="form-data" action="#">
                                        <input type="date" />
                                    </form>

                                    <p className="titulo-nome4">Hora</p>

                                    <select name="hora-crieseuevento">
                                        <option value="setehoras">19h</option>
                                        <option value="oitohoras">20h</option>
                                    </select>
                                </div>

                                <p className="titulo-nome2">Nome do Responsavel da Comunidade: </p>
                                <form className="form-botao" action="#">
                                    <input type="text" className="botao-um" />
                                </form>

                                <p className="titulo-nome3">Nome da Comunidade </p>
                                <form className="form-botao" action="#">
                                    <input type="text" className="botao-um" />
                                </form>

                                <p className="titulo-nome5">Contato </p>
                                <form className="form-botao" action="#">
                                    <input type="number" className="botao-um" />
                                </form>
                            </div>

                            <h2 className="registro">Detalhes do Evento</h2>
                            <div className="formulario div-três">
                                <div className="salas-eventos">
                                    <p className="titulo-nome5">Salas: </p>
                                    <form className="form-botao" action="#">
                                        <input type="number" className="botao-um" />
                                    </form>
                                </div>

                                <div className="botoes-evento">
                                    <p className="titulo-nome6">Interprete de libras? </p>

                                    <div id="app-cover">
                                        <div className="row">
                                            <div className="toggle-button-cover">
                                                <div className="button-cover">
                                                    <div className="button r" id="button-1">
                                                        <input type="checkbox" className="checkbox" />
                                                        <div className="knobs" />
                                                        <div className="layer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="titulo-nome7">Alimentação </p>
                                <div id="app-cover">
                                    <div className="row">
                                        <div className="toggle-button-cover">
                                            <div className="button-cover">
                                                <div className="button r" id="button-1">
                                                    <input type="checkbox" className="checkbox" />
                                                    <div className="knobs" />
                                                    <div className="layer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="titulo-nome9">Alguma restrição de Alimentação? </p>
                                    <form className="form-botao" action="#">
                                        <input type="text" className="botao-um" placeholder="Comida Vegetariana? Sem Glúten? " />
                                    </form>



                                    <p className="titulo-nome10">Equipamentos </p>
                                    <form className="form-botao" action="#">
                                        <input type="text" className="botao-um" placeholder="Microne? DataShow?" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="poligono-evento">

                    </div>

                    <div className="div-tres">
                        <img src={require("../../assets/img/18c7560356f85b006653f4a1280a3297.jpg")} className="banner-1" alt="" />
                    </div>
                </main>
            </div>
        )
    }
}

export default crieseuevento;