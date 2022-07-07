import { Link, useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import { useEffect, useState } from "react";
import { VscEdit, VscTrash, VscNewFile } from "react-icons/vsc";
import dateFormat from "../helpers/dateFormat";
import TaskModal from "../components/TaskModal";

const Project = () => {
  // States
  const [modal, setModal] = useState(false);

  const params = useParams();
  const { obtainProject, project, loading, deleteProject, handleModalTask } = useProject();

  useEffect(() => {
    obtainProject(params.id);
  }, []);

  console.log(project);

  const { name, description, client, deliveryDate } = project;

  const handleDelete = () => {
    if (confirm("Do you really want to delete this project?")) {
      deleteProject(params.id);
    }
  };

  return loading ? (
    <span className="flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
  ) : (
    <div>
      <div className="bg-sky-600 rounded shadow-lg shadow-gray-300 py-2 px-5">
        <h2 className="text-4xl font-semibold text-white ">{name}</h2>
        <p className="text-xl font-thin text-sky-100">{client}</p>
      </div>
      <div className="bg-white mt-2 shadow-lg shadow-gray-300 p-4 md:p-5 rounded ">
        <p className="text-xl font-thin mb-2 text-justify mr-2">
          <span className="text-xl font-semibold text-sky-600">
            Description:
          </span>{" "}
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold text-sky-600">
              Delivery Date:
            </span>{" "}
            <p className="text-xl font-thin mb-2">{dateFormat(deliveryDate)}</p>
          </div>

          <div className="flex gap-1">
            <button
              onClick={handleModalTask}
              className="text-xl bg-sky-600 text-white font-extralight p-2 rounded"
            >
              <VscNewFile />
            </button>
            <Link
              to={`/projects/edit/${params.id}`}
              className="text-xl bg-green-600 text-white font-extralight p-2 rounded"
            >
              <VscEdit />
            </Link>
            <button
              className="text-xl bg-red-600 text-white font-extralight p-2 rounded"
              onClick={handleDelete}
            >
              <VscTrash />
            </button>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <h3 className="text-center text-sky-600 text-2xl">
            There aren't tasks yet...
          </h3>
        </div>

        <TaskModal />
      </div>
    </div>
  );
};

export default Project;
