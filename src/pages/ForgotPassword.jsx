import { Link } from "react-router-dom";
import { useState } from "react";
import Message from "../components/Message";
import clienteAxios from "../config/clienteAxios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setMessage({
        txt: "Invalid Email...",
        error: true,
      });
      setTimeout(() => {
        setMessage({});
      }, 2000);
      return;
    }

    try {
      const { data } = await clienteAxios.post(`/users/forgotPassword`, {
        email,
      });
      setMessage({
        txt: data.msg,
        error: false,
      });
      setTimeout(() => {
        setMessage({});
      }, 3000);
      setEmail("");
    } catch (error) {
      setMessage({
        txt: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setMessage({});
      }, 2000);
      setEmail("");
    }
  };

  const { txt } = message;

  return (
    <div>
      <>
        <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
          Recovery your{" "}
          <span className="text-slate-700 font-extralightlight">Password.</span>{" "}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3"
        >
          {txt && <Message message={message} />}
          <div className="my-5">
            <label
              htmlFor="email"
              className="text-gray-900 text-xl font-thin block"
            >
              Account Email
            </label>
            <input
              id="email"
              name=""
              type="email"
              placeholder="Write your account email"
              className="w-full shadow-md border mt-1 p-3 rounded font-thin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Send me a recovery email"
            className="text-white bg-sky-700 hover:bg-sky-600 w-full rounded 
          shadow-md font-light py-2 cursor-pointer mb-5 transition-colors"
          />
        </form>
        <nav className="lg:flex lg:justify-between px-10">
          <Link to={"/"} className="text-sky-600 font-light block text-center">
            Login here!
          </Link>
          <Link
            to={"/register"}
            className="text-sky-600 font-light block text-center"
          >
            Sign up here!
          </Link>
        </nav>
      </>
    </div>
  );
};

export default ForgotPassword;
