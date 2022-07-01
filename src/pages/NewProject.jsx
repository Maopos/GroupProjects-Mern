import FormProject from "../components/FormProject";

const NewProject = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Create Project
      </h1>
      <div className="mt-2">
        <FormProject />
      </div>
    </div>
  );
};

export default NewProject;
