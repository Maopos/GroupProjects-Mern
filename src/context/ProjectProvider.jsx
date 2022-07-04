import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  // States
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});

  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  // ! Create project
  const createProject = async (project) => {
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

      const { data } = await clienteAxios.post("/projects", project, config);
      setProjects([...projects, data]);
      setAlert({
        txt: "Project created successfully...",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        navigate("/projects");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  // ! Obtain all projects
  useEffect(() => {
    const obtainProjects = async () => {
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
    };
    obtainProjects();
  }, []);

  // ! Obtain a project
  const obtainProject = async (id) => {
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

      const { data } = await clienteAxios(`/projects/${id}`, config);
      setProject(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        alert,
        loading,
        project,
        createProject,
        setAlert,
        showAlert,
        obtainProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };

export default ProjectContext;
