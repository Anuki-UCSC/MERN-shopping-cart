import React from 'react'
import CartItem from '../../components/CartItem';
export default function CartScreen() {
    return (
        <div className="cartscreen">
           <div className='cartscreen_left'>
               <h2>Shopping Cart</h2>
                <CartItem/>
           </div>
           <div className='cartscreen_right'>

           </div>
        </div>
    )
}
