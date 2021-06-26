import React, { useState } from "react";
import "./App.css";
import Header from "components/Layout/Header";
import Meals from "components/Meals/Meals";
import Cart from "components/Cart/Cart"
import CartProvider from "store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShow] = useState(false);
  function showCartHandler(){
    setCartIsShow(true);
  }
  function hideCartHandler(){
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
