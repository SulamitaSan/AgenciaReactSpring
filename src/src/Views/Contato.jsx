import React from "react";
import whats from '../img/whats.png'
import face from '../img/face.png'
import insta from '../img/insta.png'

export default function Contato() {
    return (
        <>
            <main class="container d-flex justify-content-center flex-column my-2">

                <section>
                    <article>
                        <h1>Contato</h1>
                        <div class="mb-4">
                            <label for="exampleFormControlInput1" class="form-label">Seu Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="seuemail@email.com" />
                        </div>
                        <div class="mb-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Dúvida</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="d-grid gap-2 d-md-block">
                            <input class="btn btn-primary bg-gradient" type="submit" value="Enviar" />
                        </div>
                    </article>

                    <article>

                        <h3>Nossas Redes Sociais</h3>

                        <div class="img">
                            <figure>
                                <div class="mb-3 fs-5">
                                    <a href="/"><img src={whats} alt="whatsapp" />Whatsapp</a>
                                </div>
                            </figure>

                            <figure>
                                <div class="mb-3 fs-5">
                                    <a href="/"><img src={face} alt="facebook" />Facebook</a>
                                </div>
                            </figure>

                            <figure>
                                <div class="mb-3 fs-5">
                                    <a href="/"><img src={insta} alt="instagram" />Instagram</a>
                                </div>
                            </figure>
                        </div>
                    </article>


                    <article>
                        <div>
                            <h6>Endereço</h6>
                            <em>
                                <p>
                                    <b>Rua:</b> Av.Paulista N°000 CEP: 00000-000
                                </p>
                                <p>
                                    <b>Telefone:</b> (11) 9876-5432
                                </p>
                                <p>
                                    <b>Email:</b> wordturismo@agencia.com
                                </p>
                            </em>
                        </div>
                    </article>
                </section>

            </main>
        </>
    );
}