import { Link } from "react-router-dom";
import logo from "../img/logo.gif";
import useAuth from "../hooks/useAuth";
import useProject from "../hooks/useProject";

const Header = () => {
  // hooks
  const { signOutAuth } = useAuth();
  const { signOutProjects } = useProject();

  const handleSignOut = () => {
    if (confirm("Do you really want to sign out...?")) {
      signOutAuth();
      signOutProjects();
      localStorage.removeItem("token");
    }
  };

  return (
    <header className="p-2 bg-white shadow-lg shadow-gray-200">
      <div className="md:flex md:justify-between items-center">
        <div className="flex gap-1 items-center justify-center my-4 md:my-0">
          <img src={logo} alt="logo" className="w-14" />
          <Link
            to={"/projects"}
            className="text-4xl text-sky-600 font-semibold h-full"
          >
            Group Projects
          </Link>
        </div>
        <input
          type="search"
          placeholder="Type your project..."
          className="rounded-md w-full md:w-96 p-2 bg-sky-50 block border mb-5 md:mb-0 h-10"
        />
        <div className="flex items-center gap-3 justify-between">
          <div>
            <Link to="/projects">
              <button className="text-white hover:text-sky-900 text-sm hover:bg-sky-300 rounded px-8 py-1 shadow-lg shadow-gray-300 bg-sky-600 transition-colors font-light active:shadow-sm active:shadow-gray-500 active:relative active:top-1">
                Projects
              </button>
            </Link>
          </div>
          <button
            type="button"
            className="text-sky-900 text-sm bg-sky-300 rounded px-8 py-1 shadow-lg shadow-gray-300 
            hover:bg-sky-600 hover:text-white transition-colors font-light active:shadow-sm active:shadow-gray-500 active:relative active:top-1"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
