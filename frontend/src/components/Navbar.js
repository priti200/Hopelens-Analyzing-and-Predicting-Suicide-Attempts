import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to="/">HopeLens</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to='/preview'>Preview</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;