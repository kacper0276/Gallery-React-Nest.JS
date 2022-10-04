import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const nav = useRef();
  const buttonRef = useRef();
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const showMenu = () => {
    nav.current.classList.toggle(`${styles.active}`);
    buttonRef.current.classList.toggle(`${styles.active}`);
  };

  const logout = (e) => {
    e.preventDefault();

    window.localStorage.removeItem("login-status");
    window.location.reload();
  };

  return (
    <nav>
      <button
        className={`${styles.icon}`}
        onClick={() => showMenu()}
        ref={buttonRef}
      >
        <div className={`${styles.line}`}></div>
        <div className={`${styles.line}`}></div>
        <div className={`${styles.line}`}></div>
      </button>
      <div className={`${styles.nav}`} ref={nav}>
        <div className={`${styles.link}`}>
          <NavLink
            to="/"
            className={
              splitLocation[1] === ""
                ? `${styles.menuIsActive}`
                : `${styles.links}`
            }
          >
            Strona główna
          </NavLink>
        </div>
        {window.localStorage.getItem("login-status") ? (
          <>
            <div className={`${styles.link}`}>
              <NavLink
                className={
                  splitLocation[1] === "wyloguj"
                    ? `${styles.menuIsActive}`
                    : `${styles.links}`
                }
                onClick={logout}
              >
                Wyloguj się
              </NavLink>
            </div>
            <div className={`${styles.link}`}>
              <NavLink
                className={
                  splitLocation[1] === "paneluzytkownika"
                    ? `${styles.menuIsActive}`
                    : `${styles.links}`
                }
                to="/paneluzytkownika"
              >
                Panel użytkownika
              </NavLink>
            </div>
            <div className={`${styles.link}`}>
              <NavLink
                className={
                  splitLocation[1] === "uzytkownik"
                    ? `${styles.menuIsActive}`
                    : `${styles.links}`
                }
                to="/uzytkownik/albumy"
              >
                Zobacz twoje albumy
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.link}`}>
              <NavLink
                to="/zaloguj"
                className={
                  splitLocation[1] === "zaloguj"
                    ? `${styles.menuIsActive}`
                    : `${styles.links}`
                }
              >
                Zaloguj się
              </NavLink>
            </div>
            <div className={`${styles.link}`}>
              <NavLink
                to="/zarejestruj"
                className={
                  splitLocation[1] === "zarejestruj"
                    ? `${styles.menuIsActive}`
                    : `${styles.links}`
                }
              >
                Zarejestruj się
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
