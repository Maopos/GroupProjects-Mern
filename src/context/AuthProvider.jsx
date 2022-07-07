import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // States
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios("/users/profile", config);

        setAuth(data);
        navigate("/projects");
      } catch (error) {
        setAuth({});
      }
      setLoading(false);
    };
    authUser();
  }, []);

  // ! signOutAuth
  const signOutAuth = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider value={{ loading, auth, setAuth, signOutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
