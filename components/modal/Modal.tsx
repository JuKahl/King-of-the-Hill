import React from "react";
import ReactDOM from "react-dom";
import styles from "./1.module.css";

const Modal = ({ visible, toggle, userPick }) =>
  visible
    ? ReactDOM.createPortal(
        <div className={styles.modal}>
          <div className={styles.modalPop} role="dialog" aria-modal={true}>
            <p>Do you really want to pick {userPick} ?</p>
            <button className={styles.buttonYes} onClick={toggle}>
              Yes
            </button>
            <button className={styles.buttonNo} onClick={toggle}>
              No
            </button>
          </div>
          <div className={styles.modalOverlay}></div>
        </div>,
        document.body
      )
    : null;

export default Modal;
