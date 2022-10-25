import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Brand from '../Brand/Brand'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Brand />
            <div>
                <Link to={'/category/remera'} className='option'>Remeras</Link>
                <Link to={'/category/buzo'} className='option'>Buzos</Link>
                <Link to={'/category/pantalón'} className='option'>Pantalones</Link>
                <Link to={'/category/campera'} className='option'>Camperas</Link>
            </div>
            <Link to={'/cart'}><CartWidget /></Link>
        </nav>
    )
}

export default Navbar

