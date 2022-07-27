import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./header.module.scss";

function Header(props) {
  const [windowPath, setWindowPath] = useState(window.location.pathname);

  useEffect(() => {
    setWindowPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <header className={styles.header}>
      {!props.isloggedIn ? (
        <Link to="/">
          <div className={styles.header__logo}></div>
        </Link>
      ) : (
        <Link to="/games">
          <div className={styles.header__logo}></div>
        </Link>
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={styles.header__menu}>
              <Link className={styles.header__link} to="/login">
                Login
              </Link>
              <Link className={styles.header__link} to="/sign-up">
                Sign-up
              </Link>
            </div>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <Link className={styles.header__link} to="/login">
              Login
            </Link>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Link className={styles.header__link} to="/sign-up">
              Sign-up
            </Link>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div>
              <Link className={styles.header__profile} to="/profile">
                {props.email}
              </Link>
              <button
                className={styles.header__link}
                onClick={props.handleLogout}
              >
                Logout
              </button>
            </div>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
