import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  // States
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [modalTask, setModalTask] = useState(false);

  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(true);

  const { auth } = useAuth();

  const navigate = useNavigate();

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  // ! Submit project *
  const submitProject = async (project) => {
    if (project.id) {
      await editProject(project);
    } else {
      await createProject(project);
    }
  };

  // ! Create Project
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
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  // ! Edit Project
  const editProject = async (project) => {
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

      const { data } = await clienteAxios.put(
        `/projects/${project.id}`,
        project,
        config
      );

      // Sincronice state
      const updatedProjects = projects.map((i) =>
        i._id === data._id ? data : i
      );

      setProjects(updatedProjects);

      setAlert({
        txt: "Project updated successfully...",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        navigate(`/projects/${project.id}`);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  // ! Obtain all projects
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
  }, [auth]);

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

  // ! Delete Poject
  const deleteProject = async (id) => {
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

      const { data } = await clienteAxios.delete(`/projects/${id}`, config);
      const updateProjects = projects.filter((i) => i._id !== id);
      setProjects(updateProjects);
      navigate("/projects");
      setAlert({
        txt: data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
        navigate("/projects");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // ! Open / close ModalTask
  const handleModalTask = () => {
    setModalTask(!modalTask);
  };

  // ! Submit Task
  const submitTask = async (task) => {
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
      const { data } = await clienteAxios.post("/tasks", task, config);
      console.log(data);
      handleModalTask();
    } catch (error) {
      console.log(error);
    }
  };

  // ! sign out session
  const signOutProjects = () => {
    setProjects([]);
    setProject({});
    setAlert({});
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        alert,
        loading,
        project,
        modalTask,
        submitProject,
        setAlert,
        showAlert,
        obtainProject,
        deleteProject,
        setLoading,
        handleModalTask,
        submitTask,
        signOutProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };

export default ProjectContext;
