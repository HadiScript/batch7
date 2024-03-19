import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import Crypto from "crypto-js";
import { privateKey } from "../utils/keys";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    let fromCookie = Cookies.get("auth");
    if (fromCookie) {
      let dec = Crypto.AES.decrypt(fromCookie, privateKey);
      if (dec) {
        let data = JSON.parse(dec?.toString(Crypto.enc.Utf8));

        setAuth({ user: data.user, token: data.token });
      }
    } else {
      navigate("/");
    }
  }, []);

  axios.defaults.baseURL = "http://localhost:8000/api";
  axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  return <authContext.Provider value={[auth, setAuth]}>{children}</authContext.Provider>;
};

export default AuthProvider;
