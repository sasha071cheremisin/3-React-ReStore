import React from 'react';
import './book-list-item.scss';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className="book-list-item">
            <div className="book-list-item__cover">
                <img className="book-list-item__image" src={coverImage} alt="book" />
            </div>
            <div className="book-list-item__details">
                <div className="book-list-item__title">{title}</div>
                <div className="book-list-item__author">{author}</div>
                <div className="book-list-item__price">${price}</div>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-info book-list-item__button">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BookListItem;
