import React, {useContext} from "react";
import classes from "./Cart.module.css";
import Modal from  "components/UI/Modal/Modal";
import CartContext from "store/cart-context";
/**
 * @typedef {Object} PropType 
 * @property {import("react").MouseEventHandler} onHideCart a Function that closes the Cart Modal
 */

/**
 * @param {PropType} props 
 */

const Cart = (props) => {
  const cartCtx =  useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => {
        return <li key={item.id+Math.random()}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
       {hasItems && <button className={classes.button}>Order</button>}
      </div>    
    </Modal>
  );
};

export default Cart;
