import { Fragment } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
// import classes from "./Modal.module.css";

const PortalElementBackdrop = document.getElementById("backdrop-root");
const PortalElementOverlay = document.getElementById("modaloverlay-root");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, PortalElementBackdrop)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElementOverlay
      )}
    </Fragment>
  );
}

export default Modal;
