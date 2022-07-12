import formatDate from "../helpers/dateFormat";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { RiAlarmWarningLine } from "react-icons/ri";
import { MdPendingActions, MdDoneAll } from "react-icons/md";
import useProject from "../hooks/useProject";

const TaskCard = ({ task }) => {
  const { name, description, priority, deliveryDate, state, _id } = task;

  const { handleModalEditTask, handleModalDeleteTask } = useProject();

  let color;
  let text;
  if (priority === "low") {
    color = "-emerald-300";
    text = "-emerald-900";
  } else if (priority === "medium") {
    color = "-sky-300";
    text = "-sky-900";
  } else if (priority === "high") {
    color = "-red-300";
    text = "-red-900";
  }

  return (
    <div className="border-b mt-5 flex justify-between gap-2">
      <div>
        <div className="md:flex items-center md:gap-2">
          <h3 className="text-xl">{name}. </h3>
          <p className="text-sm font-light md:mt-1">
            {formatDate(deliveryDate)}
          </p>
        </div>

        <p className="text-gray-600 font-thin">{description}</p>
        <div
          className={`bg${color} text${text} font-extralight py-0 px-1 my-2 rounded 
          flex gap-1 items-center w-20 text-sm shadow-md shadow-gray-300`}
        >
          <RiAlarmWarningLine />
          <p className={`text${text}`}>
            {priority[0].toUpperCase() + priority.slice(1)}
          </p>
        </div>
      </div>

      {/* ! Actions */}
      <div className="flex gap-0.5 md:gap-1 items-start">
        {state ? (
          <button
            title="Toggle to Pending!"
            className={`text-xl text-emerald-900 bg-emerald-300 font-extralight p-2 rounded active:relative active:shadow-gray-500 active:shadow-sm  active:top-0.5 shadow-lg shadow-gray-300`}
          >
            <MdDoneAll />
          </button>
        ) : (
          <button
            title="Toggle to Completed!"
            className={`text-xl bg-yellow-200 text-yellow-900 font-extralight p-2 rounded active:shadow-sm active:shadow-gray-500 active:relative active:top-0.5 shadow-lg shadow-gray-300`}
          >
            <MdPendingActions />
          </button>
        )}

        <button
          title="Edit Task"
          className="text-xl bg-sky-300 text-sky-900 font-extralight p-2 rounded shadow-lg shadow-gray-300"
          onClick={() => handleModalEditTask(task)}
        >
          <VscEdit />
        </button>
        <button
          title="Delete Task"
          className="text-xl bg-red-300 text-red-900 font-extralight p-2 rounded shadow-lg shadow-gray-300"
          onClick={() => handleModalDeleteTask(task)}
        >
          <VscTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
