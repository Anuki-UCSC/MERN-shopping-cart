import React from 'react'
import './ProductScreen.css'

export default function ProductScreen() {
    return (
        <div className="Productscreen">
            <div className='product_left'>
                <div className='leftimage'>
                    <img src='https://www.kapruka.com/cdn-cgi/image/width=340,quality=92,f=auto/shops/cakes/productImages/zoom/1610716378648_DSC_6301_M.jpg'
                    alt='product name'></img>
                </div> 
            </div>
            <div className='left_info'>
                <p className='left_name'>Product 1</p>
                <p>Price: $499.99</p>
                <p>Description: All our arrangements are made to order with fresh flowers. Occasionally we may face difficulties in arranging the same flowers indicated in the image due to shortages in supply. In such instances, we reserve the right to include substitutes of similar quality, style and value to ensure that you receive a beautiful Kapruka flower arrangement</p>
            </div>
            <div className='product_right'>
                <div className='right_info'>
                    <p>
                    Price: <span>Rs4399.99</span>
                    </p>
                    <p>
                    Status: <span>Rs4399.99</span> 
                    </p>
                    <p>
                    Qty: 
                    <select>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </p>
                    <p>
                        <button type='button'>Add To Cart</button>
                    </p>
                </div>

            </div>
        </div>
    )
}
