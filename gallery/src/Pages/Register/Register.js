import styles from "./Register.module.css";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  useWebsiteTitle("Zarejestruj się");
  const cloudRef = useRef();
  const navigation = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    login: "",
    password: "",
    sec_password: "",
  });
  const [message, setMessage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    cloudRef.current.classList.toggle(`${styles.active}`);

    setTimeout(() => {
      axios
        .post("http://localhost:3002/user/register", { dataLogin: dataLogin })
        .then((res) => {
          if (res.data.message === "Hasła nie są takie same!! ") {
            setMessage(res.data.message);
            cloudRef.current.classList.toggle(`${styles.active}`);
          } else if (
            res.data.message === "Użytkownik o podanym loginie istnieje"
          ) {
            setMessage(res.data.message);
            cloudRef.current.classList.toggle(`${styles.active}`);
          } else if (res.data.message === "Dodano użytkownika!!") {
            setMessage(res.data.message);
            cloudRef.current.classList.toggle(`${styles.active}`);
            setTimeout(() => {
              navigation("/zaloguj");
            }, 8000);
          }
        });
    }, 5000);
  };

  return (
    <div className={`${styles.mainStyle}`}>
      <div className={`${styles.cloud}`} ref={cloudRef}>
        <form>
          <input
            type="text"
            name="login"
            placeholder="email np. januszkowalski@gmail.com"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, login: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="twoje hasło"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, password: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="twoje hasło"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, sec_password: e.target.value })
            }
          />
          <button onClick={registerUser} className={`btn btn-primary`}>
            Zarejestruj się
          </button>
          {message ?? <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}
