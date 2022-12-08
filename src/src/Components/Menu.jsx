import React from "react";

export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">World Turismo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/Sobre">Sobre Nós</a>
                            <a className="nav-link" href="/Destinos">Destinos</a>
                            <a className="nav-link" href="/Promocoes">Promoções</a>
                            <a className="nav-link" href="/Contato">Contato</a>
                            <a className="nav-link" href="/Cadastro">Cadastro</a>
                            <a className="nav-link" href="/Login">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}