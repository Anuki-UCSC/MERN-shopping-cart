import React from 'react'
import Product from '../Product'
import './HomeScreen.css'

export default function HomeScreen() {
    return (
        <div className="homescreen">
            <h2 className='homescreen_title'>Latest Products</h2>
            <div className='homescreen_products'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
 
        </div>
    )
}
