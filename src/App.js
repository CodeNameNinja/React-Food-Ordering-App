import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "components/Layout/Header";
import Meals from "components/Meals/Meals";
import Cart from "components/Cart/Cart"
function App() {
  const [cartIsShown, setCartIsShow] = useState(false);
  function showCartHandler(){
    setCartIsShow(true);
  }
  function hideCartHandler(){
    setCartIsShow(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
