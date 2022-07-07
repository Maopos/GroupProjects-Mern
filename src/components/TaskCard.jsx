import formatDate from "../helpers/dateFormat";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { RiAlarmWarningLine } from "react-icons/ri";
import { MdPendingActions, MdDoneAll } from "react-icons/md";

const TaskCard = ({ task }) => {
  const { name, description, priority, deliveryDate, state, _id } = task;

  let color;
  if (priority === "low") {
    color = "-green-600";
  } else if (priority === "medium") {
    color = "-sky-600";
  } else if (priority === "high") {
    color = "-red-600";
  }

  return (
    <div className="border-b mt-5 flex justify-between gap-2">
      <div>

        <div className="md:flex items-center md:gap-2">
          <h3 className="text-xl">{name}. </h3>
          <p className="text-sm font-light md:mt-1">{formatDate(deliveryDate)}</p>
        </div>

        <p className="text-gray-600 font-thin">{description}</p>
        <button
          className={`bg${color} text-white font-extralight py-0 px-1 my-1 rounded 
          flex gap-1 items-center w-20 text-sm active:relative active:top-0.5`}
          //   onClick={handleDelete}
        >
          <RiAlarmWarningLine />
          <p className="text-white">
            {priority[0].toUpperCase() + priority.slice(1)}
          </p>
        </button>
      </div>

      {/* ! Actions */}
      <div className="flex gap-0.5 md:gap-1 items-start">
        {state ? (
          <button
            className={`text-xl text-white bg-green-600 font-extralight p-2 rounded active:relative active:top-0.5`}
            //   onClick={handleDelete}
          >
            <MdDoneAll />
          </button>
        ) : (
          <button
            className={`text-xl bg-yellow-300 font-extralight p-2 rounded active:relative active:top-0.5`}
            //   onClick={handleDelete}
          >
            <MdPendingActions />
          </button>
        )}

        <button
          className="text-xl bg-sky-600 text-white font-extralight p-2 rounded"
          //   onClick={handleDelete}
        >
          <VscEdit />
        </button>
        <button
          className="text-xl bg-red-600 text-white font-extralight p-2 rounded"
          //   onClick={handleDelete}
        >
          <VscTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
