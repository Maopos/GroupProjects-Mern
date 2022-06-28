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

// ! Providers
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="forgot-password/:token" element={<NewPassword />} />
            <Route path="confirm/:id" element={<ConfirmAccount />} />
          </Route>

          <Route path="projects" element={<PrivateRoute />}>
            <Route index element={<Projects />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
