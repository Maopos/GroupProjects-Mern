import { Link } from "react-router-dom";
import logo from "../img/logo.gif";

const Header = () => {
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
            <Link
              to="/projects"
              className="text-2xl text-sky-600 font-semibold"
            >
              ← Projects
            </Link>
          </div>
          <button
            type="button"
            className="text-white text-sm bg-sky-600 rounded px-8 py-1 shadow-lg shadow-gray-300 
            hover:bg-sky-700 transition-colors"
          >
            Sign Out ⇥
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
