import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = props.price.toFixed(2);
  // const price = props.meal.price.toFixed(2);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      // id: props.meal.id,
      // name: props.meal.name,
      // amount: amount,
      // price: props.meal.price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}₽</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
}

export default MealItem;
