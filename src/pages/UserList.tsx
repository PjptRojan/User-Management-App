import Card from "../components/ui/Card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";
import { useUserStore } from "../store/useUserStore";

const UserList = () => {
  const navigate = useNavigate();

  const users = useUserStore((state) => state.users);
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading)
    return (
      <div className="w-full">
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Users</h2>

      <div className="flex flex-col gap-3">
        {users.map((user, index) => (
          <Card
            key={index}
            user={user}
            handleClick={() => navigate(`/user-details/${user.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
