import axios from "axios";
import { useRef, useState } from "react";
import styles from "./Login.module.css";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useWebsiteTitle("Zaloguj się");
  const cloudRef = useRef();
  const navigation = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    login: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    cloudRef.current.classList.toggle(`${styles.active}`);

    setTimeout(() => {
      axios
        .post("http://localhost:3002/user/login", { dataLogin: dataLogin })
        .then((res) => {
          if (res.data.message) {
            setMessage(res.data.message);
            cloudRef.current.classList.toggle(`${styles.active}`);
          } else {
            console.log(res.data.user);
            window.localStorage.setItem("login-status", res.data.user);
            navigation("/");
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
          <button onClick={loginUser} className={`btn btn-primary`}>
            Zaloguj się
          </button>
          {message ?? <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}
