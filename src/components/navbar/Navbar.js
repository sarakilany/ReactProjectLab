import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='nav navbar-nav mr-auto'>
                <li className='nav-item'><Link to='/'>Home</Link></li>
                <li className='nav-item'><Link to='/counter'>Counter</Link></li>
                <li className='nav-item'><Link to='/about'>About</Link></li>
                <li className='nav-item'><Link to='/products'>Shop</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar;

