import { Fragment } from "react";

import bgEasternCuisine from "../../assets/bgEasternCuisine.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Legend</h1>
        <h2>Eastern cuisine</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bgEasternCuisine} alt="A lot of Eastern Cuisine" />
      </div>
    </Fragment>
  );
}

export default Header;
