import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
// const isEleven = (value) => value.trim() === 11;

function Checkout(props) {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const houseInputRef = useRef();
  // const telInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    city: true,
    street: true,
    house: true,
    // tel: true,
  });
 
  function formSubmitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredHouse = houseInputRef.current.value;
    // const enteredTel = telInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const cityIsValid = !isEmpty(enteredCity);
    const streetIsValid = !isEmpty(enteredStreet);
    const houseIsValid = !isEmpty(enteredHouse);
    // const telIsValid = isEleven(enteredTel);

    const formIsValid =
      nameIsValid && cityIsValid && streetIsValid && houseIsValid
      // && telIsValid
      ;

    setFormInputsValidity({
      name: nameIsValid,
      city: cityIsValid,
      street: streetIsValid,
      house: houseIsValid,
      // tel: telIsValid,
    });

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      house: enteredHouse,
      // tel: enteredTel,
    });

  }

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
  const houseControlClasses = `${classes.control} ${formInputsValidity.house ? '' : classes.invalid}`;
  // const telControlClasses = `${classes.control} ${formInputsValidity.tel ? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={houseControlClasses}>
        <label htmlFor="house">House</label>
        <input type="number" id="house" ref={houseInputRef} />
        {!formInputsValidity.house && <p>Please enter a valid number house!</p>}
      </div>
      {/* <div className={telControlClasses}>
        <label htmlFor="tel">Your phone number</label>
        <input type="tel" id="tel" ref={telInputRef} />
        {!formInputsValidity.tel && <p>Please enter a valid phone number!</p>}
      </div> */}
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
