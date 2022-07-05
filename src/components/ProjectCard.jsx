import { Link } from "react-router-dom";
import { VscGoToFile, VscEdit, VscTrash } from "react-icons/vsc";
import { useEffect } from "react";
import useProject from "../hooks/useProject";

const ProjectCard = ({ project }) => {
  const { name, _id, client } = project;
  const { obtainProject } = useProject();

  const handleClick = () => {
    obtainProject(_id);
  };

  return (
    <div className="bg-white mt-2 shadow-lg shadow-gray-300 p-2 rounded flex justify-between items-center">
      <div>
        <h3 className="text-sky-600 font-semibold">{name}</h3>
        <p className="text-slate-500 font-thin">{client}</p>
      </div>
      <div className="flex gap-1">
        <Link
          to={`${_id}`}
          className="text-xl bg-sky-600 text-white font-extralight p-2 rounded"
        >
          <VscGoToFile />
        </Link>
        <Link
          to={`/projects/edit/${_id}`}
          className="text-xl bg-green-600 text-white font-extralight p-2 rounded"
          onClick={handleClick}
        >
          <VscEdit />
        </Link>
        <Link
          to={`/projects`}
          className="text-xl bg-red-600 text-white font-extralight p-2 rounded"
        >
          <VscTrash />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
