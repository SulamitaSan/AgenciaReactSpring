import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Menu from './Menu';

class PassagemEdita extends Component {

    emptyItem = {
        ID: '',
        Cruzeiro: '',
        Aviao: '',
        Valor: ''
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
            const Passagem = await (await fetch(`/passagem/${this.props.match.params.id}`)).json();
            this.setState({item: Passagem});
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

        await fetch('/passagem' + (item.id ? '/' + item.id : ''), {
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
        const title = <h2>{item.id ? 'Editar Passagem' : 'Adicionar Passagem'}</h2>;

        return <div>
            <Menu/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
               
                    <FormGroup>
                        <Label for="Id">ID</Label>
                        <Input type="text" name="id" id="id" value={item.id || ''}
                               onChange={this.handleChange} autoComplete="id"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cruzeiro">Cruzeiro</Label>
                        <Input type="text" name="cruzeiro" id="cruzeiro" value={item.cruzeiro || ''}
                               onChange={this.handleChange} autoComplete="cruzeiro"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="aviao">Aviao</Label>
                        <Input type="text" name="aviao" id="aviao" value={item.aviao || ''}
                               onChange={this.handleChange} autoComplete="aviao"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="valor">Data de Nascimento</Label>
                        <Input type="number" name="valor" id="valor" value={item.valor || ''}
                               onChange={this.handleChange} autoComplete="valor"/>
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

export default PassagemEdita;