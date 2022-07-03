import Project from "../components/ProjectCard";
import useProject from "../hooks/useProject";

const Projects = () => {
  const { projects } = useProject();

  return (
    <div>
      <h1 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Projects
      </h1>
      {projects.length ? (
        projects.map((i) => <Project key={i._id} project={i} />)
      ) : (
        <p className="bg-white mt-2 shadow-lg shadow-gray-300 p-2 rounded text-center text-xl py-5 font-semibold text-sky-600">
          There aren't projects yet...
        </p>
      )}
    </div>
  );
};

export default Projects;
