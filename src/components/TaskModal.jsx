import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useProject from "../hooks/useProject";

const PRIORITY = ["high", "medium", "low"];

const ModalFormularioTarea = () => {
  // States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const { modalTask, handleModalTask } = useProject();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name,
      description,
      priority: priority[0].toLowerCase() + priority.slice(1),
    };
    console.log(newTask);
  };

  return (
    <Transition.Root show={modalTask} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleModalTask}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:block absolute top-3 right-3 md:top-5 md:right-5">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                  onClick={handleModalTask}
                >
                  <span className="sr-only">Cerrar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="">
                <div className="sm:text-left w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-white bg-sky-600 p-2 rounded"
                  >
                    Create Task
                  </Dialog.Title>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                      <label
                        htmlFor="name"
                        className="text-sky-600 text-lg font-semibold"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name of the new project Task..."
                        className="w-full border bg-sky-50 p-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mt-5">
                      <label
                        htmlFor="description"
                        className="text-sky-600 text-lg font-semibold"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        placeholder="Description of project Task..."
                        className="w-full border bg-sky-50 p-2 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        htmlFor="priority"
                        className="text-sky-600 text-lg font-semibold w-full"
                      >
                        Priority
                      </label>
                      <select
                        id="priority"
                        className="w-full border bg-sky-50 p-2 rounded"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <option value="">--- Select a priority ---</option>
                        {PRIORITY.map((i) => (
                          <option key={i}>
                            {i[0].toUpperCase() + i.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      className="text-white bg-sky-600 rounded p-2 w-full block text-center mt-5 
                            shadow-lg shadow-gray-300 hover:bg-sky-700 transition-colors"
                    >
                      Save Task
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalFormularioTarea;
