import './MyForm.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyForm = ({handleSubmit}) => {

  

  return (
    <Form onSubmit={ev => handleSubmit(ev)} className='customForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="name" placeholder="Nombre y apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" placeholder="Dirección de correo electrónico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control name="phone" placeholder="Número de telefono" />
      </Form.Group>
      <Button variant="info" type="submit">
        Enviar datos
      </Button>
    </Form>
  );
}

export default MyForm