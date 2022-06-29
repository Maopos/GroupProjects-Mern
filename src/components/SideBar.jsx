import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SideBar = () => {
  const { auth } = useAuth();

  return (
    <aside className="md:w-1/3 p-10">
      <p className="text-2xl">
        Hola: <span className="text-sky-600 text-3xl">{auth.name}</span>
      </p>
      <Link
        to={"/projects/createproject"}
        className="text-white text-sm bg-sky-600 rounded-md py-1 w-full block text-center mt-5 shadow-lg shadow-gray-300"
      >
        Create Project
      </Link>
    </aside>
  );
};

export default SideBar;
