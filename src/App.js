import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvader from "./store/CartProvader";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  function showCartHandler() {
    setCartIsShow(true);
  }

  function hideCartHandler() {
    setCartIsShow(false);
  }

  return (
    <CartProvader>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvader>
  );
}

export default App;
