import React from 'react';
import './Bio.css'

const Bio = (props) => {
    const {name, gender, email, images, country, phone} = props.player
    return (
        <div className='product'>
            <div className='product-img'>
                <img src= {images} alt="" />
            </div>
            <div className='product-bio'>
                <h2>{name}</h2>
                <p>Gender: {gender}</p>
                <p>Country: {country}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
           
        </div>
    );
};

export default Bio;