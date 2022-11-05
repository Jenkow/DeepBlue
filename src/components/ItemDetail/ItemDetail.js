import "./ItemDetail.css"
import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom';
import {useContext} from 'react'
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../notification/NotificationProvider";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    
    const [ready, setReady] = useState(false)
    
    const {addItem} = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {id, name, price, quantity}
        let success= addItem(productToAdd)
        console.log(success)
        success === true ? setNotification('success', `Se agregó correctamente ${quantity} ${name}`) : setNotification('error', `${name} ya esta en el carrito!`)
        setReady(true)
    }

    return (
        <div>
            <h1 className="Greeting">Listado de productos</h1>
            <div className='itemContainer'><Card key={id} style={{ width: '28rem', margin: '10px'}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <h6>Categoría: {category}</h6>
                <h6>{description}</h6>
                <h6>Precio: ${price}</h6>
                {!ready ?
                    <div>
                        { stock !== 0 ? <Counter onAdd={handleOnAdd} stck={stock}/> : <p>No hay stock</p>}                        
                    </div> :
                    <div style={{marginTop: "2rem"}}>
                        <Link to={'/cart'} className='finish' >Finalizar compra</Link>
                        <Link to={'/'} className='finish' >Volver a inicio</Link>
                    </div>
                }

            </Card.Text>
        </Card.Body>
    </Card></div>
        </div>
    )
}

export default ItemDetail