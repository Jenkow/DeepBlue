import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
import Brand from '../Brand/Brand'

const Navbar = () => {
    return(
        <nav className="navbar">
            <Brand/>
            <div>
                <Button text={"Camperas"}/>
                <Button text={"Buzos"}/>
                <Button text={"Pantalones"}/>
                <Button text={"Accesorios"}/>    
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar

