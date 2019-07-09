import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop-header.scss';

const ShopHeader = ({ numItems, total }) => {
    return (
        <div className="shop-header">
            <Link to="/3-React-ReStore/" className="shop-header__logo">ReStore</Link>
            <Link to="/3-React-ReStore/cart" className="shop-header__cart">
                <i className="shop-header__icon fa fa-shopping-cart" />
                <span className="shop-header__info">{numItems} items (${total})</span>
            </Link>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orederTotal } }) => {
    return {
        numItems: cartItems.length,
        total: orederTotal
    };
};

export default connect(mapStateToProps)(ShopHeader);
