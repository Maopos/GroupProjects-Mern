import useProjects from "../hooks/useProject";

const Projects = () => {
  const { projects } = useProjects();



  return (
    <div>
      <h1 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Projects
      </h1>
    </div>
  );
};

export default Projects;
