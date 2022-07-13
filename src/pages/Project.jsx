import { Link, useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import { useEffect } from "react";

import dateFormat from "../helpers/dateFormat";
import TaskCard from "../components/TaskCard";
import Message from "../components/Message";

import TaskModal from "../components/TaskModal";
import DeleteTaskModal from "../components/DeleteTaskModal";

import { VscTrash, VscNewFile } from "react-icons/vsc";
import { RiEdit2Line } from "react-icons/ri";
import { MdPendingActions, MdDoneAll } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

const Project = () => {
  const params = useParams();
  const {
    obtainProject,
    project,
    loading,
    deleteProject,
    handleModalTask,
    alert,
  } = useProject();

  useEffect(() => {
    obtainProject(params.id);
  }, []);

  const { name, description, client, deliveryDate, tasks } = project;

  const handleDelete = () => {
    if (confirm("Do you really want to delete this project?")) {
      deleteProject(params.id);
    }
  };

  const { txt } = alert;

  return loading ? (
    <div className="flex items-center justify-center mt-56">
      <span className="flex h-3 w-3 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-sky-400 opacity-10"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </div>
  ) : (
    <div>
      <div className="bg-sky-600 rounded shadow-lg shadow-gray-300 py-2 px-5">
        <div className="flex justify-between">
          <div>
            <h2 className="text-4xl font-semibold text-white ">{name}</h2>
            <p className="text-xl font-thin text-sky-100">{client}</p>
          </div>
          <div>
            <div className="flex gap-2 items-center justify-end">
              <p className="text-xl text-white">
                {tasks?.filter((i) => i.state === true).length}
              </p>
              <button
                title="Completed Tasks!"
                className={`text-xl text-emerald-900 bg-emerald-300 font-extralight p-2 rounded`}
              >
                <MdDoneAll />
              </button>
            </div>
            <div className="flex gap-2 items-center justify-end mt-2">
              <p className="text-xl text-white">
                {tasks?.filter((i) => i.state === false).length}
              </p>
              <button
                title="Pending Tasks!"
                className={`text-xl text-yellow-900 bg-yellow-300 font-extralight p-2 rounded`}
              >
                <MdPendingActions />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-2 shadow-lg shadow-gray-300 py-4 px-2 md:p-5 rounded ">
        <p className="text-xl font-thin mb-2 text-justify mr-2">
          <span className="text-xl font-semibold text-sky-600">
            Description:
          </span>{" "}
          {description}
        </p>
        <div className="flex justify-between">
          <p className="text-xl font-thin mb-2 text-justify mr-2">
            <span className="text-xl font-semibold text-sky-600">
              Collaborators:
            </span>{" "}
          </p>
          <Link
            to={`/projects/newcollab/${params.id}`}
            className={
              "text-xl text-orange-900 bg-orange-300 font-extralight p-2 rounded shadow-md shadow-gray-300 active:relative active:top-0.5 active:shadow-sm active:shadow-gray-600"
            }
          >
            <AiOutlineUserAdd />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold text-sky-600">
              Delivery Date:
            </span>{" "}
            <p className="text-xl font-thin mb-2">
              {deliveryDate && dateFormat(deliveryDate)}
            </p>
          </div>

          <div className="flex gap-1">
            <button
              title="New Task"
              onClick={handleModalTask}
              className="text-xl bg-emerald-400 text-emerald-900 font-extralight p-2 rounded shadow-md shadow-gray-300 active:relative active:top-0.5"
            >
              <VscNewFile />
            </button>
            <Link
              title="Edit Project"
              to={`/projects/edit/${params.id}`}
              className="text-xl bg-sky-300 text-sky-900 font-extralight p-2 rounded shadow-md shadow-gray-300 active:relative active:top-0.5"
            >
              <RiEdit2Line />
            </Link>
            <button
              title="Delete Project"
              aria-orientation="vertical"
              className="text-xl bg-red-300 text-red-900 font-extralight p-2 rounded shadow-md shadow-gray-300 active:relative active:top-0.5"
              onClick={handleDelete}
            >
              <VscTrash />
            </button>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <h3 className="text-xl font-semibold text-sky-600">Project Tasks:</h3>
          {txt && <Message message={alert} />}
          {tasks?.length ? (
            tasks.map((i) => <TaskCard key={i._id} task={i} />)
          ) : (
            <div className="flex gap-3 items-center justify-center mt-10 ">
              <h3 className="text-center text-lg font-thin text-emerald-600">
                Add a task...
              </h3>
              <button
                title="New Task"
                onClick={handleModalTask}
                className="text-xl bg-emerald-400 text-emerald-900 font-extralight p-2 rounded shadow-md shadow-gray-300"
              >
                <VscNewFile />
              </button>
            </div>
          )}
        </div>

        {/* ! Modals */}
        <TaskModal />
        <DeleteTaskModal />
      </div>
    </div>
  );
};

export default Project;
