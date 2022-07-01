import { useState, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  // States
  const [projects, setProjects] = useState(["hola", "mundillo..."]);
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

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

  return (
    <ProjectContext.Provider
      value={{ projects, alert, createProject, setAlert, showAlert }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };

export default ProjectContext;
