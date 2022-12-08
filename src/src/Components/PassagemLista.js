import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';
import Menu from './Menu';

class PassagemLista extends Component {

    constructor(props) {
        super(props);
        this.state = {passagem: []};
    }

    componentDidMount() {
        fetch('/passagem')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    async remove(id) {
        await fetch(`/passagem/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedPassagem = [...this.state.passagem].filter(i => i.id !== id);
            this.setState({passagem: updatedPassagem});
        });
    }

    render() {
        const {passagem} = this.state;

        const passagemLista = passagem.map(passagem => {
            return <tr key={passagem.id}>
                <td>{passagem.cruzeiro}</td>
                <td>{passagem.aviao}</td>
                <td>{passagem.valor}</td>
                <td>{passagem.compra}</td>
                <td>
                    <ButtonGroup>
                        <Button  color="primary" tag={Link} to={"/passagem/" + passagem.id}>Editar</Button>
                        <Button  color="danger" onClick={() => this.remove(passagem.id)}>Apagar</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Menu/>
                <Container>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/passagem/new" >Adicionar passagem</Button>
                    </div>
                    <h3>Passagems</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">id</th>
                            <th width="30%">Cruzeiro</th>
                            <th width="40%">Avião</th>
                            <th width="30%">valor</th>
                            <th width="30%">compra</th>
                            <th width="40%">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {passagemLista}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default PassagemLista;