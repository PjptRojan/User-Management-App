import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AppLayout from "../components/layout/AppLayout";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
