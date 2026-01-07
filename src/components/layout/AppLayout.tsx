import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Header
        onMenuClick={() => {
          setSidebarOpen((prev) => !prev);
        }}
      />
      <main className="container mx-auto">
        <Sidebar isOpen={sidebarOpen} />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
