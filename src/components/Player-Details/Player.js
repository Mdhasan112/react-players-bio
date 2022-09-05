import React, { useEffect, useState } from 'react';
import './Player.css'
import playerData from '../../data/data.json'
import Bio from '../Bio/Bio';
import { faCarTunnel } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Player = () => {
    const[players, setPlayers] = useState([]);
    const[cart, setCart] = useState([])
    const[playerDetails, setPlayerDetails] = useState({})
    useEffect(() => {
        setPlayers(playerData)
    }, [])
    
    const handlePlayerlistner = (player) => {
        const newCart = [...cart, player]
        setCart(newCart)
        setPlayerDetails(player)
    }
    const singlePlayer = (details) => {
       
    }
    
    return (
        <div className="container">
            <div className="player-container">
            {
                players.map(player => <Bio singlePlayer ={singlePlayer} handlePlayerlistner ={handlePlayerlistner} key ={player.id} player ={player}></Bio>)
            }
            </div>
            <div className="cart-container">
                <Cart playerDetails= {playerDetails} cart = {cart}></Cart>
            </div>
        </div>
       
    );
};

export default Player;