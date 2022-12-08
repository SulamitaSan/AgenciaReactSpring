import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';
import Menu from './Menu';

class ClienteLista extends Component {

    constructor(props) {
        super(props);
        this.state = {cliente: []};
    }

    componentDidMount() {
        fetch('/cliente')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    async remove(id) {
        await fetch(`/cliente/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCliente = [...this.state.cliente].filter(i => i.id !== id);
            this.setState({cliente: updatedCliente});
        });
    }

    render() {
        const {cliente} = this.state;

        const clienteLista = cliente.map(cliente => {
            return <tr key={cliente.id}>
                <td>{cliente.name}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>{cliente.DataNascimento}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.endereco}</td>
                <td>
                    <ButtonGroup>
                        <Button  color="primary" tag={Link} to={"/cliente/" + cliente.id}>Editar</Button>
                        <Button  color="danger" onClick={() => this.remove(cliente.id)}>Apagar</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Menu/>
                <Container>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/cliente/new" >Adicionar Cliente</Button>
                    </div>
                    <h3>Clientes</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Nome</th>
                            <th width="30%">CPF</th>
                            <th width="40%">E-mail</th>
                            <th width="30%">Data de Nascimento</th>
                            <th width="30%">Telefone</th>
                            <th width="40%">Endereço</th>
                            <th width="40%">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clienteLista}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ClienteLista;