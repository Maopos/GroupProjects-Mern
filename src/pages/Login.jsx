import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Message from "../components/Message";
import clienteAxios from "../config/clienteAxios";

const Login = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState({});

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({ txt: "All fields are required...", error: true });
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }
    try {
      const { data } = await clienteAxios.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem('token', data.token)
    } catch (error) {
      setAlert({
        error: true,
        txt: error.response.data.msg,
      });
      setTimeout(() => {
        setAlert({});
      }, 2000);
    }

    setEmail("");
    setPassword("");
  };

  const { txt } = alert;

  return (
    <>
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
        Log in and manage your{" "}
        <span className="text-slate-700 font-extralightlight">Projects.</span>{" "}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3"
      >
        {txt && <Message message={alert} />}
        <div className="my-5">
          <label
            htmlFor="email"
            className="text-gray-900 text-xl font-thin block"
          >
            Email address
          </label>
          <input
            id="email"
            name=""
            type="email"
            placeholder="Email address"
            className="w-full shadow-md border mt-1 p-3 rounded font-thin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="text-gray-900 text-xl font-thin block"
          >
            Password
          </label>
          <input
            id="password"
            name=""
            type="password"
            placeholder="Password"
            className="w-full shadow-md border mt-1 p-3 rounded font-thin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="text-white bg-sky-700 hover:bg-sky-600 w-full rounded 
          shadow-md font-light py-2 cursor-pointer mb-5 transition-colors active:relative active:top-1"
        />
      </form>
      <nav className="lg:flex lg:justify-between px-10">
        <Link
          to={"register"}
          className="text-sky-600 font-light block text-center"
        >
          Sign up here!
        </Link>
        <Link
          to={"forgot-password"}
          className="text-sky-600 font-light block text-center"
        >
          Did you forget your password?
        </Link>
      </nav>
    </>
  );
};

export default Login;
