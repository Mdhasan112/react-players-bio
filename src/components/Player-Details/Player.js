import React, { useEffect, useState } from 'react';
import './Player.css'
import playerData from '../../data/data.json'
import Bio from '../Bio/Bio';

const Player = () => {
    const[players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData)
    }, [])
    
    return (
        <div className="container">
            <div className="player-container">
            {
                players.map(player => <Bio player ={player}></Bio>)
            }
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
       
    );
};

export default Player;