import React from 'react';
import './Bio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Bio = (props) => {
    const {name, gender, email, images, country, phone} = props.player
    const handlePlayerlistner = props.handlePlayerlistner
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
                <button onClick={() => handlePlayerlistner(props.player)} className='main-btn'><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
           
        </div>
    );
};

export default Bio;