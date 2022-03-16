const Login = () => {
  return (
    <>
      <h3 className="text-sky-600 font-thin text-4xl capitalize">
        Log in and manage your <span className="text-slate-700">projects.</span>{" "}
      </h3>
      <form className="my-10 bg-white shadow rounded-lg p-2 md:px-10 md:py-3">
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
        <input
          type="submit"
          className="text-white bg-sky-700 hover:bg-sky-600 w-full rounded 
          shadow-md font-light py-2 cursor-pointer mb-5 transition-colors"
        />
      </form>
    </>
  );
};

export default Login;
