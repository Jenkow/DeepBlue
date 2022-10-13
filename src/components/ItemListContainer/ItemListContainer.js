import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../asyncMock/asyncMock'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const productsMapped = products.map(prod => <Card key={prod.id} style={{ width: '18rem', margin: '10px'}}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>
                <h6>Precio: ${prod.price}</h6>
                <Counter stck={prod.stock}/>
            </Card.Text>
        </Card.Body>
    </Card>)

    if (loading) {
        return <img src= "https://media.tenor.com/pgO8hZgOW5AAAAAM/loading-bar.gif"/>
    }

    return (
        <div>
            <h1 className="Greeting">Listado de productos</h1>
            <div className='itemContainer'>{productsMapped}</div>
        </div>
    )
}

export default ItemListContainer