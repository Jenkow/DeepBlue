import { useEffect, useState } from 'react'
import { getProductsById } from '../asyncMock/asyncMock'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


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

    return <ItemDetail id={prod.id} name={prod.name} img={prod.img} category={prod.category} description={prod.description} price={prod.price} stock={prod.stock}/>
}

export default ItemDetailContainer