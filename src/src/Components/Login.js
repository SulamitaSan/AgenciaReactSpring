import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../img/logo.png'

function Login() {
    return (
        <>
            <Form className='form-signin'>
                <img src={logo} class=" align-items-center" alt="logo" />
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control className="" type="email" placeholder="Insira seu email aqui" />
                    <Form.Text className="text-muted">
                        Não compartilharemos seu email com ninguem
                    </Form.Text>
                </Form.Group>
<br></br>
                <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control className="" type="password" placeholder="Insira aqui a sua senha" />
                </Form.Group>
                <Form.Group className="checkbox" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lembra-me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </>
    );
}

export default Login;