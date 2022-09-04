import React, { useEffect, useState } from 'react';
import './Player.css'
import playerData from '../../data/data.json'
import Bio from '../Bio/Bio';
import { faCarTunnel } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Player = () => {
    const[players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData)
    }, [])

    const[cart, setCart] = useState([])
    const handlePlayerlistner = (player) => {
        const newCart = [...cart, player]
        setCart(newCart)
    }
    
    return (
        <div className="container">
            <div className="player-container">
            {
                players.map(player => <Bio handlePlayerlistner ={handlePlayerlistner} key ={player.id} player ={player}></Bio>)
            }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
       
    );
};

export default Player;