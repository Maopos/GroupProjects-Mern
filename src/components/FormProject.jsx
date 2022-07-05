import { useEffect, useState } from "react";
import Message from "../components/Message";
import useProject from "../hooks/useProject";
import { useParams } from "react-router-dom";

const FormProject = () => {
  // States
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const { submitProject, alert, showAlert, project } = useProject();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setId(project._id);
      setName(project.name);
      setDescription(project.description);
      setDeliveryDate(project.deliveryDate?.split("T")[0]);
      setClient(project.client);
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, description, deliveryDate, client].includes("")) {
      showAlert({
        txt: "All fields are required...",
        error: true,
      });
      return;
    }

    const newProject = { id, name, description, client, deliveryDate };

    await submitProject(newProject);

    setId(null);
    setName("");
    setClient("");
    setDescription("");
    setDeliveryDate("");
  };

  const { txt } = alert;

  return (
    <form
      onSubmit={handleSubmit}
      className="py-10 px-3 md:px-20 bg-white rounded md:w-full shadow-lg shadow-gray-300 "
    >
      <div className="mb-5">
        <label htmlFor="name" className="text-sky-600 text-lg font-semibold">
          Project Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name of your new Project..."
          className="w-full border bg-sky-50 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="text-sky-600 text-lg font-semibold"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Project description..."
          className="w-full border bg-sky-50 p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="client" className="text-sky-600 text-lg font-semibold">
          Client Name
        </label>
        <input
          id="client"
          type="text"
          placeholder="Name of your Client..."
          className="w-full border bg-sky-50 p-2 rounded"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="delivery-date"
          className="text-sky-600 text-lg font-semibold"
        >
          Delivery Date
        </label>
        <input
          id="delivery-date"
          type="Date"
          className="w-full border bg-sky-50 p-2 rounded"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
      </div>
      {id ? (
        <button className="text-white text-sm bg-sky-600 rounded p-1 w-full block text-center mt-5 shadow-lg shadow-gray-300 hover:bg-sky-700 transition-colors">
          <p>Update Project ⟳</p>
        </button>
      ) : (
        <button className="text-white text-sm bg-sky-600 rounded pb-1 w-full block text-center mt-5 shadow-lg shadow-gray-300 hover:bg-sky-700 transition-colors">
          <p>
            Save Project <span className="text-2xl">⎘</span>
          </p>
        </button>
      )}
      {txt && <Message message={alert} />}
    </form>
  );
};

export default FormProject;
