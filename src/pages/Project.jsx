import { useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import { useEffect } from "react";

const Project = () => {
  const params = useParams();
  const { obtainProject, project, loading } = useProject();

  useEffect(() => {
    obtainProject(params.id);
  }, []);

  const { name, description, client, deliveryDate } = project;

  return loading ? (
    <span className="flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
  ) : (
    <div>
      <h2 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        {name}
      </h2>
      <div className="bg-white mt-2 shadow-lg shadow-gray-300 p-5 md:p-10 rounded">
        <h3 className="text-2xl font-semibold text-sky-600">Client:</h3>
        <p className="text-xl font-thin mb-2">{client}</p>

        <h3 className="text-2xl font-semibold text-sky-600">Description:</h3>
        <p className="text-xl font-thin mb-2">{description}</p>

        <h3 className="text-2xl font-semibold text-sky-600">Delivery Date:</h3>
        <p className="text-xl font-thin mb-2">{deliveryDate}</p>
      </div>
    </div>
  );
};

export default Project;
