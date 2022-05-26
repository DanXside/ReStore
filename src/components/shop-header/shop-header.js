import React from 'react';
import { Link } from 'react-router-dom';

import './shop-header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <div className='shop-logo'>
                <Link to='/' className='logo text-dark'>ReStore</Link>
            </div>
            <div className='shop-cart'>
                <Link to="/cart" className='shop-purch'>
                    <FontAwesomeIcon icon={faCartShopping} className="shop-icon" />
                    {numItems} items (${total})
                </Link>
            </div>
        </header>
    );
};

export default ShopHeader;