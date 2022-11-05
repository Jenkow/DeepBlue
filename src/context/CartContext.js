import {useState, useEffect, createContext, useContext} from 'react'

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
            return true
        }else{
            return false
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
    
    const total = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += (prod.price*prod.quantity)
        });
        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const isEmpty = () => {
        return (cart.length === 0)
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, isEmpty, total, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}