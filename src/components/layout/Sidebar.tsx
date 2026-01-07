interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-gray-900 text-white
          transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
    >
      <div className="p-4 text-xl text-center font-bold border-b border-gray-700">
        BrainTip AI
      </div>

      <nav className="flex flex-col p-4 gap-2">
        <button className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
          Users
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
