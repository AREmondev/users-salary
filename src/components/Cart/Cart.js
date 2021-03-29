import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let totalSalary =0;
    for (let i = 0; i < cart.length; i++) {
        const money = cart[i];
        totalSalary = money.salary + totalSalary;
        
    }
    return (
        <div className= 'cart'>
            <h4>Employ quantity : {cart.length} </h4>
            <p>Initial salary:{cart.salary} </p>
            <h5>Total salary: {totalSalary} </h5>
        </div>
    );
};

export default Cart;