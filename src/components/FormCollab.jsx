import { useState } from "react";
import useProject from "../hooks/useProject";
import Message from "./Message";

const FormCollab = () => {
  // State
  const [email, setEmail] = useState("");

  const { alert, showAlert, submitCollaborator } = useProject();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      showAlert({
        txt: "Type the email of the new collaborator...",
        error: true,
      });
      return;
    }

    submitCollaborator(email);
    setEmail('')
  };

  const { txt } = alert;

  return (
    <div className="bg-white mt-5 shadow-lg shadow-gray-300 rounded p-5 md:px-10 md:py-10 lg:px-32">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-sky-600">
          Type the email of the new collaborator...
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full mt-5 shadow shadow-gray-400 border rounded p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-sky-600 w-full mt-5 py-1 text-white rounded shadow shadow-gray-300 
        hover:bg-sky-500 active:relative active:top-0.5 active:shadow-sm active:shadow-gray-500"
        >
          Add New Collaborator
        </button>
      </form>
      {txt && <Message message={alert} />}
    </div>
  );
};

export default FormCollab;
