import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Menu from './Menu';

class ClienteEdita extends Component {

    emptyItem = {
        name: '',
        cpf: '',
        email: '',
        data: '',
        telefone: '',
        endereço: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const Cliente = await (await fetch(`/cliente/${this.props.match.params.id}`)).json();
            this.setState({item: Cliente});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/cliente' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Editar Cliente' : 'Adicionar Cliente'}</h2>;

        return <div>
            <Menu/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="text" name="nome" id="nome" value={item.nome || ''}
                               onChange={this.handleChange} autoComplete="nome"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input type="text" name="cpf" id="cpf" value={item.cpf || ''}
                               onChange={this.handleChange} autoComplete="cpf"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="data">Data de Nascimento</Label>
                        <Input type="date" name="data" id="data" value={item.data || ''}
                               onChange={this.handleChange} autoComplete="data"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefone">Telefone</Label>
                        <Input type="number" name="email" id="telefone" value={item.telefone || ''}
                               onChange={this.handleChange} autoComplete="telefone"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="endereco">E-mail</Label>
                        <Input type="text" name="endereco" id="endereco" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="endereco"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Salvar</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancelar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default ClienteEdita;