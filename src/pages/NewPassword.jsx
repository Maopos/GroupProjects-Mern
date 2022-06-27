import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Message from "../components/Message";

const NewPassword = () => {
  // States
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [validToken, setValidToken] = useState(false);
  const [alert, setAlert] = useState({});

  const { token } = useParams();

  useEffect(() => {
    const checkToken = async () => {
      try {
        await clienteAxios(`users/forgotPassword/${token}`);
        setValidToken(true);
      } catch (error) {
        setAlert({
          error: true,
          txt: error.response.data.msg,
        });
      }
    };
    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([password, password2].includes("")) {
      setAlert({
        error: true,
        txt: "All fields are required...",
      });
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }

    if (password != password2) {
      setAlert({ txt: "Both passwords must be equals...", error: true });
      setPassword2("");
      setPassword("");
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }

    if (password.length < 6 || password.length > 9) {
      setAlert({
        txt: "Password length must be greater than 5 and less than 10 characters...",
        error: true,
      });
      setPassword2("");
      setPassword("");
      setTimeout(() => {
        setAlert({});
      }, 5000);
      return;
    }

    try {
      const { data } = await clienteAxios.post(
        `users/forgotPassword/${token}`,
        { password }
      );
      setAlert({
        error: false,
        txt: data.msg,
        login: true,
      });
      setPassword("");
      setPassword2("");
    } catch (error) {
      setAlert({
        error: true,
        txt: error.response.data.msg,
      });
    }
  };

  const { txt, login } = alert;

  return (
    <>
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
        Set your new{" "}
        <span className="text-slate-700 font-extralightlight">Password.</span>{" "}
      </h3>
      {validToken && (
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3"
        >
          <div className="my-5">
            <label
              htmlFor="password"
              className="text-gray-900 text-xl font-thin block"
            >
              New Password
            </label>
            <input
              id="password"
              name=""
              type="password"
              placeholder="New Password"
              className="w-full shadow-md border mt-1 p-3 rounded font-thin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password2"
              className="text-gray-900 text-xl font-thin block"
            >
              Confirm New Password
            </label>
            <input
              id="password2"
              name=""
              type="password"
              placeholder="Confirm New Password"
              className="w-full shadow-md border mt-1 p-3 rounded font-thin"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Set new password"
            className="text-white bg-sky-700 hover:bg-sky-600 w-full rounded 
        shadow-md font-light py-2 cursor-pointer mb-5 transition-colors"
          />
        </form>
      )}
      {txt && (
        <div className="mt-10">
          <Message message={alert} />
        </div>
      )}
      {login && (
        <Link
          to="/"
          className="text-sky-600 font-light block text-center mt-10"
        >
          Login →
        </Link>
      )}
    </>
  );
};

export default NewPassword;
