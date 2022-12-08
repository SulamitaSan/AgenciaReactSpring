import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';
import Menu from './Menu';

class CompraLista extends Component {

    constructor(props) {
        super(props);
        this.state = {compra: []};
    }

    componentDidMount() {
        fetch('/compra')
            .then(response => response.json())
            .then(data => this.setState({compra: data}));
    }

    async remove(id) {
        await fetch(`/compra/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCompra = [...this.state.compra].filter(i => i.id !== id);
            this.setState({compra: updatedCompra});
        });
    }

    render() {
        const {compra} = this.state;

        const compraLista = compra.map(compra => {
            return <tr key={compra.id}>
                <td>{compra.ida}</td>
                <td>{compra.volta}</td>
                <td>{compra.valor}</td>
                <td>{compra.IDcompra}</td>
                <td>{compra.IDcliente}</td>
                <td>{compra.IDpassagem}</td>
                <td>
                    <ButtonGroup>
                        <Button  color="primary" tag={Link} to={"/compra/" + compra.id}>Editar</Button>
                        <Button  color="danger" onClick={() => this.remove(compra.id)}>Apagar</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Menu/>
                <Container>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/compra/new" >Nova Compra</Button>
                    </div>
                    <h3>Clientes</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">id</th>
                            <th width="30%">ida</th>
                            <th width="40%">volta</th>
                            <th width="30%">valor</th>
                            <th width="30%">IDcompra</th>
                            <th width="30%">IDcliente</th>
                            <th width="40%">IDpassagem</th>
                            <th width="40%">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {compraLista}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default CompraLista;