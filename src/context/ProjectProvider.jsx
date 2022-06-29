import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  // States
  const [projects, setProjects] = useState(["hola", "mundillo..."]);
  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };

export default ProjectContext;
