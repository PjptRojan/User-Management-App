import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, getUserPosts } from "../services/userService";
import type { Post, User } from "../types/user";
import { Globe, Phone } from "lucide-react";

const UserDetail = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!userId) return;
      try {
        const id = Number(userId);

        const [userDetailsRes, userPostsRes] = await Promise.all([
          getUserById(id),
          getUserPosts(id),
        ]);

        setUserDetails(userDetailsRes);
        setPosts(userPostsRes);
      } catch (error) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const { name, email, phone, username, website, address, company } =
    userDetails ?? {};

  if (loading) return <p>...Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-6 border border-gray-200 rounded-lg px-6 py-4 shadow-md w-max mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-semibold">
          {name?.charAt(0)}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-3">
            Contact Information
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-gray-700">
              📧 <span className="ml-1">{email}</span>
            </p>
            <div className="text-gray-700 flex items-center gap-1">
              <span>
                <Phone className="text-red-500" size={18} />
              </span>
              <span className="ml-1">{phone}</span>
            </div>
            <p className="text-gray-700 flex items-center gap-1">
              <span>
                <Globe size={18} className="text-blue-600" />
              </span>
              <a
                href={`https://${website}`}
                target="_blank"
                className="ml-1 text-blue-600 hover:underline"
              >
                {website}
              </a>
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Company</h3>

          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium text-gray-800">{company?.name}</p>
            <p className="text-gray-500 italic">“{company?.catchPhrase}”</p>
            <p className="text-gray-500">{company?.bs}</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Address</h3>
        <p className="text-sm text-gray-700">
          {address?.street}, {address?.suite}
        </p>
        <p className="text-sm text-gray-500">
          {address?.city} - {address?.zipcode}
        </p>
      </div>

      {/* Posts */}
      <h3 className="text-md font-semibold text-gray-600 mb-0">Recent Posts</h3>

      <div className="flex flex-col gap-3">
        {posts?.map((post: Post) => (
          <div
            key={post.id}
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer"
          >
            <p className="font-medium text-gray-800">{post.title}</p>
            <p className="text-sm text-gray-500 line-clamp-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
