import FormProject from "../components/FormProject";
import useProject from "../hooks/useProject";

const EditProject = () => {
  const { project, loading } = useProject();
  const { name } = project;

  return loading ? (
    <span className="flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
  ) : (
    <div>
      <h2 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Edit Project: {name}
      </h2>
      <div className="mt-2">
        <FormProject />
      </div>
    </div>
  );
};

export default EditProject;
