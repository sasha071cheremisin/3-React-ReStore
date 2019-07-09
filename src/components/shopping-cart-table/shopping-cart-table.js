import React from 'react';
import './shopping-cart-table.scss';
import { connect } from 'react-redux';
import {
    bookRemovedFromCart,
    allBooksRemovedFromCart,
    bookAddedToCart
} from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning shopping-cart-table__button">
                        <i className="fa fa-minus-circle" />
                    </button>

                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success shopping-cart-table__button">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger shopping-cart-table__button">
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table shopping-cart-table__table">
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
                    {items.map(renderRow)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="shopping-cart-table__total">
                            Total: ${total}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orederTotal } }) => {
    return {
        items: cartItems,
        total: orederTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
