import {useState, useEffect, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        setTotalQuantity(getQuantity())
    }, [cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            console.log("Ya esta en el carrito")
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () => {
        let acc = 0;
        cart.forEach(prod => {
            acc += prod.quantity
        })
        return acc
    }

    const isEmpty = () => {
        return (cart.length === 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, isEmpty}}>
            {children}
        </CartContext.Provider>
    )
}