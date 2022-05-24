import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';

import withBookstoreService from '../hoc';
import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';

const App = () => {
    return (
        <Routes>
            <Route 
                path='/'
                element={<HomePage />}
                exact />
            <Route
            path='/cart'
            element={<CartPage />} />
        </Routes>
    );
}

export default App;