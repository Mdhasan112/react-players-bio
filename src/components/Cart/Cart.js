import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary 
    }
    return (
        <div className='cart'>
            <h3>Player Samary: {cart.length}</h3>
            <h4> Total Salary: {total}</h4>
        </div>
    );
};

export default Cart;