import FormCollab from "../components/FormCollab";
import { useEffect } from "react";
import useProject from "../hooks/useProject";
import { Link, useParams } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";

const NewCollab = () => {
  const { obtainProject, project, loading, collab, setCollab, addCollab } =
    useProject();

  const params = useParams();

  useEffect(() => {
    obtainProject(params.id);
  }, []);

  return (
    <div>
      <Link to={`/projects/${params.id}`}>
        <h2 className="text-4xl font-semibold text-white pb-5 pt-3 px-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
          {project.name}
          <span className="text-sky-100 font-thin block text-lg">
            Add Collaborator
          </span>
        </h2>
      </Link>
      <FormCollab />
      {loading ? (
        <div className="flex items-center justify-center mt-24">
          <span className="flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-sky-400 opacity-10"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
      ) : (
        collab?._id && (
          <div
            className="bg-white mt-5 shadow-lg shadow-gray-300 rounded p-5 md:px-10 md:py-10 lg:px-32 
          flex items-center justify-between"
          >
            <div>
              <h2 htmlFor="email" className="text-sky-600 text-xl">
                {collab?.name}
              </h2>
              <h2 className="font-thin">{collab?.email}</h2>
            </div>
            <div className="flex gap-2">
              <button
                className={
                  "text-xl text-red-900 bg-red-300 font-extralight p-2 rounded shadow-md shadow-gray-300 active:relative active:top-0.5 active:shadow-sm active:shadow-gray-600"
                }
                onClick={() => setCollab({})}
              >
                <VscTrash />
              </button>
              <button
                className={
                  "text-xl text-orange-900 bg-orange-300 font-extralight p-2 rounded shadow-md shadow-gray-300 active:relative active:top-0.5 active:shadow-sm active:shadow-gray-600"
                }
                onClick={() => addCollab({ email: collab.email })}
              >
                <AiOutlineUserAdd />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewCollab;
