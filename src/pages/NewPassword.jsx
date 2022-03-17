const NewPassword = () => {
  return (
    <>
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
        Set your new{" "}
        <span className="text-slate-700 font-extralightlight">Password.</span>{" "}
      </h3>
      <form className="my-10 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3">
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
          />
        </div>
        <input
          type="submit"
          value="Set new password"
          className="text-white bg-sky-700 hover:bg-sky-600 w-full rounded 
        shadow-md font-light py-2 cursor-pointer mb-5 transition-colors"
        />
      </form>
    </>
  );
};

export default NewPassword;
