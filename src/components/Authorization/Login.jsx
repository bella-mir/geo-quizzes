import React from "react";
import styles from "./authorization.module.scss"
import { useForm } from "../../hooks/useForm";

function Login(props) {
  const controlInput = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = controlInput.values;
    props.handleLogin(email, password);
  };

  return (
    <div className={styles.register}>
      <h2 className={styles.register__title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.form__input_white}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={controlInput?.values?.email || ''}
          onChange={controlInput.handleChange}
        />
        <span className={styles.form__error} id="email-error"></span>
        <input
          className={styles.form__input_white}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={controlInput?.values?.password || ''}
          onChange={controlInput.handleChange}
        />
        <span className={styles.form__error} id="password-error"></span>
        <div className={styles.register__buttoncontainer}>
          <button type="submit" className={styles.form__submit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;