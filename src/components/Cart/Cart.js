import './Cart.css'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, isEmpty, total, clearCart } = useContext(CartContext)
    if (isEmpty()) {
        return <div>
            <h1>Tu carrito esta vacío</h1>
            <Link to={'/'} className='finish' >Volver a inicio</Link>
        </div>
    }

    const cartRows = cart.map(prod =>
        <ListGroup key={prod.id} horizontal>
          <ListGroup.Item className="customRow">{prod.name}</ListGroup.Item>
          <ListGroup.Item className="customRow">Cantidad: {prod.quantity}</ListGroup.Item>
          <ListGroup.Item className="customRow">${prod.price}</ListGroup.Item>
          <ListGroup.Item className="customRow">Subtotal: {prod.price*prod.quantity}</ListGroup.Item>
          <ListGroup.Item className="customRow"><CloseButton onClick={() => removeItem(prod.id)}/></ListGroup.Item>
        </ListGroup>)
        

    return (
        <div>
            <h1>Tu carrito</h1>
            {cartRows}
            <h3>Total: ${total()}</h3>
            <p><Button onClick={() => clearCart()} variant="info">Vaciar carrito</Button></p>
            <Link to={'/checkout'} className='finish' >Finalizar compra</Link>
        </div>

    );
}

export default Cart
