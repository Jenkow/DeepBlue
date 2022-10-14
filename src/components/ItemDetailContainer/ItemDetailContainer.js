import { useEffect, useState } from 'react'
import { getProductsById } from '../asyncMock/asyncMock'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const [prod, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <img src= "https://media.tenor.com/pgO8hZgOW5AAAAAM/loading-bar.gif" alt="cargando"/>
    }

    return (
        <div>
            <h1 className="Greeting">Listado de productos</h1>
            <div className='itemContainer'><Card key={prod.id} style={{ width: '28rem', margin: '10px'}}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>
                <h6>Categoría: {prod.category}</h6>
                <h6>{prod.description}</h6>
                <h6>Precio: ${prod.price}</h6>
                <Counter stck={prod.stock}/>
            </Card.Text>
            <Button className="customButton" variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card></div>
        </div>
    )
}

export default ItemDetailContainer