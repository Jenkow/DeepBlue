import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'


const ItemDetailContainer = () => {
    const [prod, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <img src="https://media.tenor.com/pgO8hZgOW5AAAAAM/loading-bar.gif" alt="cargando" />
    }

    return <ItemDetail id={prod.id} name={prod.name} img={prod.img} category={prod.category} description={prod.description} price={prod.price} stock={prod.stock} />
}

export default ItemDetailContainer