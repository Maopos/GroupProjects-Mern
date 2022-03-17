import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
        Register and manage your{" "}
        <span className="text-slate-700 font-extralightlight">Projects.</span>{" "}
      </h3>
      <form className="my-10 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3">
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
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password2"
            className="text-gray-900 text-xl font-thin block"
          >
            Confirm Password
          </label>
          <input
            id="password2"
            name=""
            type="password"
            placeholder="Confirm Password"
            className="w-full shadow-md border mt-1 p-3 rounded font-thin"
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
