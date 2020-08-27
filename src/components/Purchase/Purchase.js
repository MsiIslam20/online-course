import React from 'react';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Purchase.css';

const Purchase = (props) => {

    const purchaseCart = props.purchaseCourse;

    const totalAmount = purchaseCart.reduce( (total, item) => total + item.price , 0)

    return (
        <div className="cart">
            <h3 className="text-center">Course Summary</h3>
            <h5>Course Enrolled:  {purchaseCart.length}</h5>
            <h4>Total Course Price: <span>${totalAmount.toFixed(2)}</span></h4>
            <div className="button">
                <button className="btn btn-dark">Purchase Course <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Purchase;