import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-5 bg-white shadow-lg shadow-gray-200">
      <div className="md:flex md:justify-between">
        <Link
          to={"/projects"}
          className="text-4xl text-sky-600 font-semibold flex items-center justify-center mb-5 md:mb-0"
        >
          Group Projects
        </Link>
        <input
          type="search"
          placeholder="Type your project..."
          className="rounded-md w-full md:w-96 p-2 bg-sky-50 block border mb-5 md:mb-0"
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
