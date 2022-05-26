import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';

import withBookstoreService from '../hoc';
import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';
import ShopHeader from '../shop-header';

const App = () => {
    return (
        <main role="main" className='container'>
            <ShopHeader numItems={5} total={210} />
            <Routes>
                <Route 
                    path='/'
                    element={<HomePage />}
                    exact />
                <Route
                path='/cart'
                element={<CartPage />} />
            </Routes>
        </main>
    );
}

export default App;