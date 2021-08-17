import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

export default function Product() {
    return (
        <div className='product'>
            <img src='https://www.kapruka.com/cdn-cgi/image/width=340,quality=92,f=auto/shops/flowershop/flowerImages/zooms/1517487129417__DSC2211_M.JPG' />
            <div className='product_info'>
                <p className='info_name'>
                    Product 1
                </p>
                <p className='info_description'>
                All our arrangements are made to order with fresh flowers. Occasionally we may face difficulties in arranging the same flowers indicated in the image due to shortages in supply. In such instances, we reserve the right to include substitutes of similar quality, style and value to ensure that you receive a beautiful Kapruka flower arrangement
                </p>
                <p className='info_price'>
                    Rs. 4039.00
                </p>
                
                <Link to={`/product/${1111}`} className='info_buttonLink'>
                <div className='info_button'>
                     View
                </div>
                </Link>
                
            </div>
        </div>
    )
}
