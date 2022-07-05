import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ! Layouts
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoute from "./layouts/PrivateRoute";

// ! Public Routes
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import ConfirmAccount from "./pages/ConfirmAccount";

// ! Private Routes
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";
import EditProject from "./pages/EditProject";

// ! Providers
import { AuthProvider } from "./context/AuthProvider";
import { ProjectProvider } from "./context/ProjectProvider";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="forgot-password/:token" element={<NewPassword />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
            </Route>

            <Route path="/projects" element={<PrivateRoute />}>
              <Route index element={<Projects />} />
              <Route path="createproject" element={<NewProject />}></Route>
              <Route path=":id" element={<Project />}></Route>
              <Route path="edit/:id" element={<EditProject />}></Route>
            </Route>
          </Routes>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
