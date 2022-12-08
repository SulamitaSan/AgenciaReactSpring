import React from "react";
import cancun from '../img/cancun.jpg';
import rio from '../img/rio.jpg';
import grecia from '../img/grecia.jpg';
import london from '../img/london.jpg';
import NavPage from "../Components/NavPage";

function Destinos() {


    return (
        <div className="home">
            <main className="main">
                <div className="row row-cols-md-2 g-1">
                    <figure>
                        <div className="row-1">
                            <div className="card">
                                <img className="card-img-top" src={cancun} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title">Cancun</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                                        alias,
                                        quo obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a
                                        animi
                                        ipsa qui ut aut. Eaque, perspiciatis doloribus.</p>
                                    <a href="/CompraLista" className="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure>
                        <div className="row-1">
                            <div className="card">
                                <img className="card-img-top" src={rio} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title">Rio</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                                        alias,
                                        quo
                                        obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                        ipsa
                                        qui
                                        ut aut. Eaque, perspiciatis doloribus.</p>
                                    <a href="/CompraLista" className="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure>
                        <div className="row-1">
                            <div className="card">
                                <img className="card-img-top" src={grecia} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title">Grécia</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                                        alias,
                                        quo
                                        obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                        ipsa
                                        qui
                                        ut aut. Eaque, perspiciatis doloribus.</p>
                                    <a href="/CompraLista" className="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure>
                        <div className="row-1">
                            <div className="card">
                                <img className="card-img-top" src={london} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title">Londres</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                                        alias,
                                        quo
                                        obcaecati voluptatem perferendis deserunt autem amet ratione ab iure enim a animi
                                        ipsa
                                        qui
                                        ut aut. Eaque, perspiciatis doloribus.</p>
                                    <a href="/CompraLista" className="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </main>

            <NavPage />
        </div>
    );
}
export default Destinos;