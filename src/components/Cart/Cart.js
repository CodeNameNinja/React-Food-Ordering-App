import React from "react";
import classes from "./Cart.module.css";
import Modal from  "components/UI/Modal/Modal";

/**
 * @typedef {Object} PropType 
 * @property {import("react").MouseEventHandler} onHideCart a Function that closes the Cart Modal
 */

/**
 * @param {PropType} props 
 */

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
          <span>Total amount</span>
          <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>    
    </Modal>
  );
};

export default Cart;
