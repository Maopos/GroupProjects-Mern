import { Link } from "react-router-dom";
import { useState } from "react";
import Message from "../components/Message";
import clienteAxios from "../config/clienteAxios";

const Register = () => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Message State
  const [message, setMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password, confirmPassword].includes("")) {
      setMessage({ txt: "All fields are required...", error: true });
      setTimeout(() => {
        setMessage({});
      }, 2000);
      return;
    }

    if (password != confirmPassword) {
      setMessage({ txt: "Both passwords must be equals...", error: true });
      setConfirmPassword("");
      setPassword("");
      setTimeout(() => {
        setMessage({});
      }, 2000);
      return;
    }

    if (password.length < 6 || password.length > 9) {
      setMessage({
        txt: "Password length must be greater than 5 and less than 10 characters...",
        error: true,
      });
      setConfirmPassword("");
      setPassword("");
      setTimeout(() => {
        setMessage({});
      }, 5000);
      return;
    }

    // Create user in DB
    try {
      const { data } = await clienteAxios.post("/users", {
        name,
        email,
        password,
      });
      setMessage({
        txt: data.msg,
        error: false,
      });
      setTimeout(() => {
        setMessage({});
      }, 5000);

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage({
        txt: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setMessage({});
      }, 3000);
    }
  };

  const { txt } = message;

  return (
    <>
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
        Register and manage your{" "}
        <span className="text-slate-700 font-extralightlight">Projects.</span>{" "}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3"
      >
        {txt && <Message message={message} />}
        <div className="my-5">
          <label
            htmlFor="name"
            className="text-gray-900 text-xl font-thin block"
          >
            Name
          </label>
          <input
            id="name"
            name=""
            type="text"
            placeholder="Your full name"
            className="w-full shadow-md border mt-1 p-3 rounded font-thin"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="my-5">
          <label
            htmlFor="confirmPassword"
            className="text-gray-900 text-xl font-thin block"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name=""
            type="password"
            placeholder="Confirm Password"
            className="w-full shadow-md border mt-1 p-3 rounded font-thin"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Sign up"
          className="text-white bg-sky-700 hover:bg-sky-600 w-full rounded 
          shadow-md font-light py-2 cursor-pointer mb-5 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between px-10">
        <Link to={"/"} className="text-sky-600 font-light block text-center">
          Login here!
        </Link>
        <Link
          to={"/forgot-password"}
          className="text-sky-600 font-light block text-center"
        >
          Did you forget your password?
        </Link>
      </nav>
    </>
  );
};

export default Register;
