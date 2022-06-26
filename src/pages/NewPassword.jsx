import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Message from "../components/Message";

const NewPassword = () => {
  // States
  const [validToken, setValidToken] = useState(false);
  const [alert, setAlert] = useState({});

  const { token } = useParams();

  useEffect(() => {
    const checkToken = async () => {
      try {
        await axios(`http://localhost:4000/api/users/forgotPassword/${token}`);
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

  return (
    <>
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-2">
        Set your new{" "}
        <span className="text-slate-700 font-extralightlight">Password.</span>{" "}
      </h3>
      {validToken ? (
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
      ) : (
        <div className="mt-20">
          <Message message={alert} />
          <Link
            to={"/forgot-password"}
            className="text-sky-600 font-light block text-center mt-10"
          >
            ← Go back
          </Link>
        </div>
      )}
    </>
  );
};

export default NewPassword;
