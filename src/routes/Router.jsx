import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

const Router = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} setUser={setUser} />}
      />
    </Routes>
  );
};

export default Router;