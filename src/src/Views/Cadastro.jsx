import React from "react";

import { Button } from 'reactstrap';
import { Link} from 'react-router-dom';

function Cadastro() {
    return (
        <div className="home">
            <main class="container d-flex justify-content-center flex-column my-2">

                <h1>Cadastro</h1>
                <form action="formulario">

                    <label for="nome" class="form-label">Nome Completo:</label>
                    <input type="text" name="nome" id="nome" class="form-control" required placeholder="Nome" /> <br></br>

                    <label for="data" class="form-label">Data nascimento:</label>
                    <input type="date" name="data" id="data" class="form-control" required />
                    <br></br>
                    <input type="radio" name="opc" id="masc" value="masc" required />
                    <label for="masc">Masculino</label>
                    <br></br>
                    <input type="radio" name="opc" id="fem" value="fem" required />
                    <label for="fem">Feminino</label>
                    <br></br>
                    <input type="radio" name="opc" id="trans" value="trans" required />
                    <label for="trans">Trans</label>
                    <br></br>
                    <br></br>
                    <label for="endereco" class="form-label">Endereço:</label>
                    <input type="text" name="endereco" id="endereco" class="form-control" required placeholder="Endereço" />
                    <br></br>
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" name="email" id="email" class="form-control" required placeholder="Email"></input>
                    <br></br>
                    <label for="inputPassword6" class="form-label">Senha:</label>
                    <input type="password" id="inputPassword6" class="form-control" required placeholder="Digite a senha" />
                    <br></br>
                    <label for="inputPassword6" class="form-label">Confirma a Senha:</label>
                    <input type="password" id="inputPassword6" class="form-control" required placeholder="Digite a senha novamente" />

                    <br></br>

                    <label for="cidade" class="form-label">Cidade:</label>
                    <input type="text" id="cidade" class="form-control" required placeholder="Digite o nome da Cidade" />
                    <br></br>

                    <label for="estado" class="form-label">Estado:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Escolha um estado</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>
                    </select>

                    <br></br>
                    <div class="mb-3">
                        <label for="tel" class="form-label">Telefone:</label>
                        <input type="tel" name="tel" id="tel" class="form-control" maxlength="11" required
                            placeholder="DDD + Número" />
                    </div><br></br>
                    <input type="radio" name="opc" id="opc" value="opc" required />
                    <label for="opc">Li e concordo com as <a href="/">Politicas de Privacidade</a>. </label><br></br>
                    <input type="radio" name="opc" id="opc" value="opc" required />
                    <label for="opc">Li e concordo com os <a href="/">Termos de Compra</a>. </label><br></br>
                    <input type="radio" name="opc" id="opc" value="opc" required />
                    <label for="opc">Desejo receber promoções de viagens do World Turismo.</label><br></br>
                    <br></br>

                        <Button color="primary" type="submit">Salvar</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancelar</Button>


                </form>
            </main >
        </div>
    )
}

export default Cadastro;