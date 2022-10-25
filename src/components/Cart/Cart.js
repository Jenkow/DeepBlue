import './Cart.css'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const { cart, removeItem, isEmpty } = useContext(CartContext)
    if (isEmpty()) {
        return <h1>Tu carrito esta vacío</h1>
    }

    const cartRows = cart.map(prod =>
        <ListGroup key={prod.id} horizontal>
          <ListGroup.Item className="customRow">{prod.name}</ListGroup.Item>
          <ListGroup.Item className="customRow">Cantidad: {prod.quantity}</ListGroup.Item>
          <ListGroup.Item className="customRow">${prod.price}</ListGroup.Item>
          <ListGroup.Item className="customRow">Subtotal: {prod.price*prod.quantity}</ListGroup.Item>
          <ListGroup.Item className="customRow"><CloseButton onClick={() => removeItem(prod.id)}/></ListGroup.Item>
        </ListGroup>)
        

    const getTotal = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += (prod.price*prod.quantity)
        });
        return accu
    }

    return (
        <div>
            <h1>Tu carrito</h1>
            {cartRows}
            <h3>Total: ${getTotal()}</h3>
            <Button variant="info">Crear Orden</Button>
        </div>

    );
}

export default Cart
