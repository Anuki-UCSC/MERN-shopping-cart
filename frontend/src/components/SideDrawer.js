import React from 'react'
import './SideDrawer.css'
import{Link} from 'react-router-dom';

export default function SideDrawer({show,click}) {
    const sideDrawerClass=['sidedrawer'];

    if(show){
        sideDrawerClass.push('show');
    }

    return (
        // join() method returns an array in to a string
        <div className={sideDrawerClass.join(' ')}>
            <ul className='sidedrawer_links' onlick={click}></ul>
            <div className='sideitemdiv'>
            <li className='li_sidedrawer'>
            <Link to='/cart'>
                <div className='innerLiDiv'>
                    <div className='cart1'><i className='fas fa-shooping-cart'></i></div>
                    <div className='cart2'> cart</div>
                    <div className='cart3'><span className='sidedrawer_cartbadge'>0</span></div>
                </div>
            </Link>
            </li>
            <li className='li_sidedrawer'>
            <Link to='/'>
            <div className='innerLiDiv'>
                    <div className='cart1'></div>
                    <div className='cart2'> Shop</div>
                    <div className='cart3'></div>
                </div>
            </Link>
            </li>
            </div>






            {/* <li>
                
                <div>
                <i className='fas fa-shooping-cart'></i>
                <span>
                    cart<span className='sidedrawer_cartbadge'>0</span>
                </span>
                </div>
            
            </li>

            <li>
            
                Shop
            </li> */}
        </div>
    )
}
