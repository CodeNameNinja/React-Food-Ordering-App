import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from  'assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton'


/**
 * 
 * @typedef {Object} PropType 
 * @property {import("react").MouseEventHandler} onShowCart a function that shows the Cart Modal
 */
/**
 * @param {PropType} props 
 */
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="A Table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
