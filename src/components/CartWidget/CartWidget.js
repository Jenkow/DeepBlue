import cart from './assets/cart.png'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return (
        <div>
            <img src={cart} alt='cart'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget