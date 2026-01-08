import Card from "../components/ui/Card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";
import { useUserStore } from "../store/useUserStore";
import SearchBar from "../components/ui/SearchBar";

const UserList = () => {
  const navigate = useNavigate();

  const users = useUserStore((state) => state.users);
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const searchQuery = useUserStore((state) => state.searchQuery);
  const setSearchQuery = useUserStore((state) => state.setSearchQuery);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <div className="w-full">
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="text-xl font-semibold text-gray-800">Users</h2>
        <SearchBar
          handleChange={setSearchQuery}
          placeholder="Search by name, username, or email..."
          type="string"
          value={searchQuery}
        />
      </div>

      <div className="flex flex-col gap-3">
        {filteredUsers.length ? (
          filteredUsers.map((user, index) => (
            <Card
              key={index}
              user={user}
              handleClick={() => navigate(`/user-details/${user.id}`)}
            />
          ))
        ) : (
          <div className="flex justify-center">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
