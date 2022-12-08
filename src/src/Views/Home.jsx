import React from "react";
import logo from "../img/logo.png"
import HomeImg from "../Components/HomeImg";


function Home() {
    const newLocal = "btn btn-outline-primary bg-gradient p-md-1";
    return (
        <>
            <main>
                <div className="home">
                    <div className="container overflow-hidden">
                        <div className="row gy-5">
                            <div className="col-6">
                                <figure>
                                    <div className="d-flex p-3 justify-content-center align-items-center">
                                        <div className="logo">
                                            <img src={logo} alt="logo" />
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card-body-1">
                                <div className="position-relative text-center">
                                    <div className="d-flex p-md-1 justify-content-around">
                                        <div className="row g-2">
                                            <div className="d-block w-100">
                                                <div className="origem">
                                                    <label for="exampleDataList" className="form-label text-center fs-5">Origem</label>
                                                    <input className="form-control" list="datalistOptions" id="exampleDataList"
                                                        placeholder="Digite sua origem" />
                                                    <label for="data" className="form-label text-center fs-5">Data</label>
                                                    <input type="date" name="data" id="data" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-2">
                                            <div className="d-block w-100">
                                                <div className="destino">
                                                    <label for="exampleDataList" className="form-label text-center fs-5">Destino</label>
                                                    <input className="form-control" list="datalistOptions" id="exampleDataList"
                                                        placeholder="Digite seu destino" />
                                                    <label for="data" className="form-label text-center fs-5">Data</label>
                                                    <input type="date" name="data" id="data" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>

                                            <div className="">
                                                <a href="/Destinos" className={newLocal} tabindex="-1" role="button"
                                                    aria-disabled="true">Pequisar</a>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <HomeImg /> 
            </main>
            

        </>
    );
}

export default Home;