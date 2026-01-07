import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header onMenuClick={() => {}} />
      <main className="container mx-auto py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
