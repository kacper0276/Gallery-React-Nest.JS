import { Navigate } from "react-router-dom";

export default function AuthtenticatedRoute({ children }) {
  const auth = window.localStorage.getItem("login-status");

  if (auth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
