import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProject from "../hooks/useProject";

const SideBar = () => {
  const { auth } = useAuth();

  return (
    <aside className="md:w-1/3 md:p-10 py-5 px-3">
      <p className="text-2xl">
        Hola: <span className="text-sky-600 text-3xl">{auth.name}</span>
      </p>
      <Link
        to={"/projects/createproject"}
        className="text-white text-sm bg-sky-600 rounded py-1 w-full block text-center mt-5 shadow-lg shadow-gray-300 hover:bg-sky-700 transition-colors active:relative active:top-1"
      >
        Create Project ＋
      </Link>
    </aside>
  );
};

export default SideBar;
