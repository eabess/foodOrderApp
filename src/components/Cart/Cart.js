import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Plov", amount: 2, price: 250 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>100₽</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart} >Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
