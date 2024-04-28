import '../css/NavBar.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='heading' onClick={()=> window.location.href='/'}>
                <img src={logo} alt='logo' />
                <div className='heading-title'>React Jobs</div>
            </div>
            <div className='links'>
                <Link className='navbar-ele' to='/'>Home</Link>
                <Link className='navbar-ele' to='/jobs'>Jobs</Link>
                <Link className='navbar-ele' to='/add-job'>Add Job</Link>
            </div>
        </div>
    )
}

export default NavBar;