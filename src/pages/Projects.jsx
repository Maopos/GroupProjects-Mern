import Project from "../components/ProjectCard";
import useProject from "../hooks/useProject";
import Message from "../components/Message";
import { useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { alert, loading, setLoading } = useProject();

  const { txt } = alert;

  // ! Obtain a project
  useEffect(() => {
    const obtainProjects = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/projects", config);
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    obtainProjects();
  }, []);

  if (loading) {
    return (
      <span className="flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Projects
      </h1>
      {txt && <Message message={alert} />}
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
