import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Menu from './Menu';

class CompraEdita extends Component {

    emptyItem = {
        ida: '',
        volta: '',
        valor: '',
        IDcompra: '',
        IDcliente: '',
        IDpassagem: ''
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
            const Compra = await (await fetch(`/compra/${this.props.match.params.id}`)).json();
            this.setState({item: Compra});
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

        await fetch('/compra' + (item.id ? '/' + item.id : ''), {
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
        const title = <h2>{item.id ? 'Editar compra' : 'Adicionar compra'}</h2>;

        return <div>
            <Menu/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Ida</Label>
                        <Input type="date" name="ida" id="ida" value={item.ida || ''}
                               onChange={this.handleChange} autoComplete="ida"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="volta">Volta</Label>
                        <Input type="date" name="volta" id="volta" value={item.volta || ''}
                               onChange={this.handleChange} autoComplete="volta"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="valor">Valor</Label>
                        <Input type="number" name="valor" id="valor" value={item.valor || ''}
                               onChange={this.handleChange} autoComplete="valor"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="IDcompra">IDcompra</Label>
                        <Input type="text" name="IDcompra" id="IDcompra" value={item.IDcompra || ''}
                               onChange={this.handleChange} autoComplete="IDcompra"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="IDcliente">IDcliente</Label>
                        <Input type="text" name="IDcliente" id="IDcliente" value={item.IDcliente || ''}
                               onChange={this.handleChange} autoComplete="IDcliente"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="IDpassagem">IDpassagem</Label>
                        <Input type="text" name="IDpassagem" id="IDpassagem" value={item.IDpassagem || ''}
                               onChange={this.handleChange} autoComplete="IDpassagem"/>
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

export default CompraEdita;