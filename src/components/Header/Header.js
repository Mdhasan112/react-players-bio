import React from 'react';
import './Header.css'
import images from '../../images/bcb-logo-tbs.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img src= {images} alt="" />
        </div>
    );
};

export default Header;