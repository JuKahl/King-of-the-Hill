import React, { MouseEventHandler } from "react";
import styles from "./Modal.module.css";

export type ModalProps = {
  pick: any; // This needs to be fixed - feel free to suggest the right type
  onAccept: MouseEventHandler;
  onDecline: MouseEventHandler;
};

const Modal = ({ onDecline, onAccept, pick }: ModalProps) => (
  <div className={styles.modal}>
    <div className={styles.modalPop} role="dialog" aria-modal={true}>
      <p>Do you really want to pick {pick.pickTeam} ?</p>
      <button className={styles.buttonYes} onClick={onAccept}>
        Yes
      </button>
      <button className={styles.buttonNo} onClick={onDecline}>
        No
      </button>
    </div>
    <div className={styles.modalOverlay}></div>
  </div>
);

export default Modal;
