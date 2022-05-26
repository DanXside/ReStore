import React from 'react';

import './shopping-cart-table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartTable = () => {
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>40$</td>
                        <td>
                            <button className='btn btn-outline-danger btn-sm float-right'><FontAwesomeIcon icon={faTrash} /></button>
                            <button className='btn btn-outline-success btn-sm float-right'><FontAwesomeIcon icon={faPlus} /></button>
                            <button className='btn btn-outline-warning btn-sm float-right'><FontAwesomeIcon icon={faMinus} /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='total'>Total: 201$</div>
        </div>
    );
};

export default ShoppingCartTable;