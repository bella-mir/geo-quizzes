import React from "react";
import ok from "../../images/ok.svg";
import decline from "../../images/decline.svg";
import styles from "./authorization.module.scss"

function InfoTooltip({ isCorrect, onClose, isOpen }) {
  return (
    <section className={styles.popup + (isOpen ? styles.popup_opened : "")}>
      <div className={styles.popup__container}>
        <img
          src={isCorrect ? ok : decline}
          alt={"Correct sign"}
          className={styles.popup__isCorrectImage}
        ></img>

        <h2 className={styles.popup__title}>
          {isCorrect
            ? "You are succesfully signed-up!"
            : "Something is wrong! Try again"}
        </h2>

        <button
          id="popupAdClose"
          type="button"
          className={styles.popup__close}
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default InfoTooltip;
