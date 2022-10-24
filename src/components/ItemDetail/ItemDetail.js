import "./ItemDetail.css"
import Button from 'react-bootstrap/Button';
import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom';
import {useContext} from 'react'
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [q,setQ] = useState(1)
    const [ready, setReady] = useState(false)
    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQ(quantity)
        const productToAdd = {id, name, price, quantity}
        addItem(productToAdd)
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
                        <Counter onAdd={handleOnAdd} stck={stock}/>                        
                    </div> :
                    <div style={{marginTop: "2rem"}}>
                        <Link to={'/'} className='finish' >Finalizar compra</Link>
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