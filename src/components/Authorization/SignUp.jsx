import React from "react";
import { Link } from "react-router-dom";
import styles from "./authorization.module.scss";
import { useForm } from "../../hooks/useForm";

function SignUp(props) {
  const controlInput = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = controlInput.values;
    props.handleRegister(email, password);
  };

  return (
    <div className={styles.register}>
      <h2 className={styles.register__title}>Sign-up</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.form__input_white}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={controlInput?.values?.email || null}
          onChange={controlInput.handleChange}
        />
        <span className={styles.form__error} id="email-error"></span>
        <input
          className={styles.form__input_white}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={controlInput?.values?.password || null}
          onChange={controlInput.handleChange}
        />
        <span className={styles.form__error} id="password-error"></span>
        <div className={styles.register__buttoncontainer}>
          <button type="submit" className={styles.form__submit}>
            Sign-up
          </button>
        </div>
      </form>
      <div>
        <Link to="/login" className={styles.register__signin}>
          Already? Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
