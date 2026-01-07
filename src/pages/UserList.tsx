import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { getUsers } from "../services/userService";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

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
