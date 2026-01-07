import { ArrowRight } from "lucide-react";
import type { User } from "../../types/user";

interface CardProps {
  user: User;
  handleClick: () => void;
}

const Card = ({ user, handleClick }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-semibold">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <button
          className="text-sm text-blue-600 flex items-center gap-2 cursor-pointer"
          onClick={handleClick}
        >
          View Details
          <span>
            <ArrowRight size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
