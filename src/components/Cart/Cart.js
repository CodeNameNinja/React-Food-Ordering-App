import React, {useContext} from "react";
import classes from "./Cart.module.css";
import Modal from  "components/UI/Modal/Modal";
import CartItem from "./CartItem"
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

  const cartItemRemoveHandler = id => {
    
  }
  const cartItemAddHandler = item => {
    
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => {
        <CartItem
          key={item.id+Math.random()}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
        // return <li key=>{item.name}</li>;
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
