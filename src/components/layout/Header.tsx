import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white">
      <div className="flex items-center gap-3">
        <button
          className="lg:block md:hidden p-2 rounded hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="text-gray-800" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">User Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
