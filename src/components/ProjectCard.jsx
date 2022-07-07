import { Link } from "react-router-dom";
import { VscGoToFile, VscEdit, VscTrash } from "react-icons/vsc";
import useProject from "../hooks/useProject";

const ProjectCard = ({ project }) => {
  const { name, _id, client } = project;
  const { obtainProject, deleteProject } = useProject();

  const handleEdit = () => {
    obtainProject(_id);
  };

  const handleDelete = () => {
    if (confirm("Do you really want to delete this project?")) {
      deleteProject(_id);
    }
  };

  return (
    <div className="bg-white mt-2 shadow-lg shadow-gray-300 py-2 px-5 rounded flex justify-between items-center">
      <div>
        <Link to={`${_id}`}>
          <h3 className="text-sky-600 font-semibold">{name}</h3>
          <p className="text-slate-500 font-thin">{client}</p>
        </Link>
      </div>
      <div className="flex gap-1">
        <Link
          to={`${_id}`}
          className="text-xl bg-green-600 text-white font-extralight p-2 rounded"
        >
          <VscGoToFile />
        </Link>
        <Link
          to={`/projects/edit/${_id}`}
          className="text-xl bg-sky-600 text-white font-extralight p-2 rounded"
          onClick={handleEdit}
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
  );
};

export default ProjectCard;
