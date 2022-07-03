import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar navbar-expand navbar-light bg-light'>
            <ul className='nav navbar-nav mr-auto'>
                <li className='nav-item mx-3'><Link to='/'>Home</Link></li>
                <li className='nav-item mx-3'><Link to='/counter'>Counter</Link></li>
                <li className='nav-item mx-3'><Link to='/about'>About</Link></li>
                <li className='nav-item mx-3'><Link to='/products'>Shop</Link></li>
                <li className='nav-item mx-3'><Link to='/signup'>Signup</Link></li>
                <li className='nav-item mx-3'><Link to='/todo'>ToDo</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar;

