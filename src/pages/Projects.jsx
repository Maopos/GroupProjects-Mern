import useProject from "../hooks/useProject";

const Projects = () => {
  const { projects } = useProject();



  return (
    <div>
      <h1 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Projects
      </h1>
    </div>
  );
};

export default Projects;
