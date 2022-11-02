import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext' 
import Button from 'react-bootstrap/Button';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase/index";
import { useNavigate } from 'react-router-dom'


const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const navigate= useNavigate()

    const createOrder = async() => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name: 'Fulanito Fulan',
                    phone: '123456789',
                    mail: 'contact@gmail.com'
                },
                items: cart,
                total: total()
            }

            const batch = writeBatch(db)

            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                console.log(`El id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }

        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }


    return (
        <div>
            <h1>Checkout</h1>
            <Button onClick={createOrder} variant="info">Generar orden</Button>
        </div>
    )
}

export default Checkout