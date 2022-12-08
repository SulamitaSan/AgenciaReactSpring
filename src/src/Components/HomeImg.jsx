import React from "react";
import praia2 from '../img/praia2.jpg'
import torre from '../img/torre.jpg'
import lhama from '../img/lhama.jpg'


function HomeImg() {

    return (
        <>
            <main>
                <div className='home'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <figure>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={praia2} class="card-img-top" alt="foto de praia" />
                                    <div class="card-body">
                                        <h5 class="card-title">As Melhores praias</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nemo
                                            maiores? Provident voluptatum laudantium dolorem incidunt possimus eveniet ipsum. Quidem
                                            dolore maiores aut voluptate ea sit quibusdam eligendi quo eos?</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Imagem ilustrativa</small>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={torre} class="card-img-top" alt="foto da torre" />
                                    <div class="card-body">
                                        <h5 class="card-title">Os Melhores locais</h5>
                                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                                            blanditiis. Dolorem, quas earum quasi, quae delectus, illo necessitatibus magnam animi
                                            dicta iusto velit eaque excepturi. Quia earum deserunt aliquam expedita.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Imagem ilustrativa</small>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={lhama} class="card-img-top" alt="foto de uma Lhama" />
                                    <div class="card-body">
                                        <h5 class="card-title">Os Melhores passeios</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                                            voluptate hic voluptatem velit dicta ex molestias molestiae dolore! Voluptatem dolorem
                                            officiis excepturi? Vitae, alias quod? Vel aspernatur amet cupiditate repellendus..</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Imagem ilustrativa</small>
                                    </div>
                                </div>
                            </div>
                        </figure>

                    </div>
                </div>
            </main>
        </>
    );

}

export default HomeImg;