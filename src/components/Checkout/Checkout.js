import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase/index";
import { useNavigate } from 'react-router-dom'
import MyForm from "../MyForm/MyForm";
import { NotificationContext } from "../../notification/NotificationProvider";


const Checkout = () => {

    const [loading, setLoading] = useState(false)
    
    const [dataSent, setDataSent] = useState(false)

    const [buyer, setBuyer] = useState({})

    const { cart, total, clearCart } = useContext(CartContext)

    const { setNotification } = useContext(NotificationContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        

        try {
            const objOrder = {
                buyer,
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

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                setNotification('success', `Orden creada con éxito! El id de su orden es: ${orderAdded.id}`)
            } else {
                setNotification('error', 'Hay productos que estan fuera de stock')
            }

        } catch (error) {
            setNotification('error', 'No se pudo crear la orden')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        let buyer = {
            name: ev.target.name.value,
            phone: ev.target.phone.value,
            mail: ev.target.email.value
        }
        setBuyer(buyer)
        setDataSent(true)
        setNotification('success', 'Datos enviados. Ya puede generar la orden')
    }

    return (
        <div>
            <h1>Checkout</h1>
            <MyForm handleSubmit={(ev) => handleSubmit(ev)} />
            { dataSent && <Button onClick={createOrder} variant="info" size="lg">Generar orden</Button>}
        </div>
    )
}

export default Checkout