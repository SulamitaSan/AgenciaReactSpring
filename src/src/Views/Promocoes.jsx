import React from "react";
import aviao from '../img/aviao.jpg';
import hotel from '../img/hotel.jpg';
import cruzeiro from '../img/cruzeiro.jpg';
import bonde from '../img/bonde.jpg';
import { Container } from "react-bootstrap";
import NavPage from "../Components/NavPage";


export default function Promocoes() {
    return (
        <>
            <Container>
                <main className="main">
                    <div className="row row-cols-1 row-cols-md-2 g-1">
                        <figure>
                            <div className="row-1">
                                <div className="card">
                                    <img className="card-img-top" src={aviao} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Descontos</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, alias,
                                            quo obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                            ipsa qui ut aut. Eaque, perspiciatis doloribus.</p>
                                        <a href="/PassagemLista" className="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure>
                            <div className="row-1">
                                <div className="card">
                                    <img className="card-img-top" src={hotel} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hoteis</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, alias,
                                            quo obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                            ipsa qui ut aut. Eaque, perspiciatis doloribus.</p>
                                        <a href="/PassagemLista" className="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure>
                            <div className="row-1">
                                <div className="card">
                                    <img className="card-img-top" src={cruzeiro} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Cruzeiros</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, alias,
                                            quo obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                            ipsa qui ut aut. Eaque, perspiciatis doloribus.</p>
                                        <a href="/PassagemLista" className="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure>
                            <div className="row-1">
                                <div className="card">
                                    <img className="card-img-top" src={bonde} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Passeios</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, alias,
                                            quo obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                            ipsa qui ut aut. Eaque, perspiciatis doloribus.</p>
                                        <a href="/PassagemLista" className="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                        </figure>

                    </div>
                </main>
            </Container>
            <NavPage/>
        </>
    );
}