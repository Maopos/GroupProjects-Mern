import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Message from "../components/Message";

const ConfirmAccount = () => {
  // Message state
  const [message, setMessage] = useState({});
  const [confirmedAccount, setConfirmedAccount] = useState(false);

  // useParams
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND}/api/users/confirm/${id}`;
        const { data } = await axios.get(url);
        setMessage({
          txt: data.msg,
          error: false,
        });
        setConfirmedAccount(true);
      } catch (error) {
        setMessage({
          txt: error.response.data.msg,
          error: true,
        });
        setConfirmedAccount(false);
      }
    };
    confirmAccount();
  }, []);

  const { txt } = message;

  return (
    <div className="my-44 bg-white shadow-lg rounded-lg p-2 md:px-10 md:py-3">
      <h3 className="text-sky-600 text-center font-thin text-4xl mb-10">
        Confirm your account and manage your{" "}
        <span className="text-slate-700 font-extralightlight">Projects.</span>{" "}
      </h3>
      <div>{txt && <Message message={message} />}</div>
      {confirmedAccount && (
        <Link to={"/"} className="text-sky-600 font-light block text-center mt-5">
          Login here!
        </Link>
      )}
    </div>
  );
};

export default ConfirmAccount;
