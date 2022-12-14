import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products') 

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


    const productsMapped = products.map(prod => <Card key={prod.id} style={{ width: '18rem', margin: '10px'}}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>
                Precio: ${prod.price}
            </Card.Text>
            <Link to={`/detail/${prod.id}`} className="finish">Ver detalle</Link>
        </Card.Body>
    </Card>)

    if (loading) {
        return <img src= "https://media.tenor.com/pgO8hZgOW5AAAAAM/loading-bar.gif" alt="loading"/>
    }

    return (
        <div>
            <h1 className="Greeting">Listado de productos</h1>
            <div className='itemContainer'>{productsMapped}</div>
        </div>
    )
}

export default ItemListContainer