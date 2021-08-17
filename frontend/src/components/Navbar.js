import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar({click}) {
    return (
        <div className='navbar'>
            {/* logo */}
            <div className="navbar_logo">
                <h2>MERN Shopping Cart</h2>
                <img src='https://i.dlpng.com/static/png/5345504-business-logo-png-images-vector-and-psd-files-free-download-on-png-logos-360_360_preview.png'/>
            </div>
            {/* navbar menu */}
            <div className="navbar_link">
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        <span className='spanclass'>Cart</span>
                        <span className='cartlogo_badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </div>
            <div className='hamburger_class' onClick={click}>
            <i class="fas fa-bars"></i>
            </div>
        </div>
    )
}
