import React from 'react';
import CartContext from "./cart-context";
const CartProvider = (props) => {
    /**
     * @type {Function} addItemToCartHandler a Function to add Items to Cart
     * @param {Object} item 
     */
    const addItemToCartHandler = item => {};
    /**
     * @type {Function} removeItemFromCartHandler a Function to remove Items to Cart
     * @param {Object} id 
     */
    const removeItemFromCartHandler = id => {};
    /**
     * @type {Object}
     * @property {Array} items
     * @property {number} totalAmount
     * @property {Function} addItemToCartHandler
     * @property {Function} removeItemFromCartHandler
     */
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler 
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
