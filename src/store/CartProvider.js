import React, { useReducer } from "react";
import CartContext from "./cart-context";
/**
 * @typedef {object} CartAction
 * @property {string} type
 * @property {object} [item]
 * @property {object} [id]
 */
/**
 * @typedef {object} CartState
 * @property {array} items
 * @property {number} totalAmount
 */

/**
 * @type {CartState}
 */
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/**
 * @param {object} state
 * @param {CartAction} action
 * @returns {CartState} defaultCartState
 */
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  /**
   * @type {Function} addItemToCartHandler a Function to add Items to Cart
   * @param {Object} item
   */
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item,
    });
  };
  /**
   * @type {Function} removeItemFromCartHandler a Function to remove Items to Cart
   * @param {Object} id
   */
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id,
    });
  };
  /**
   * @type {Object}
   * @property {Array} items
   * @property {number} totalAmount
   * @property {Function} addItemToCartHandler
   * @property {Function} removeItemFromCartHandler
   */
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
