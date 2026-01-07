import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AppLayout from "../components/layout/AppLayout";
import UserList from "../pages/UserList";
import UserDetail from "../pages/UserDetail";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users-list" element={<UserList />} />
        <Route path="/user-details/:userId" element={<UserDetail />} />
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
