import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../types/user";
import { ArrowLeft, Globe, Phone } from "lucide-react";
import Loader from "../components/ui/Loader";
import { useUserStore } from "../store/useUserStore";

const UserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const selectedUser = useUserStore((state) => state.selectedUser);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const postsByUserId = useUserStore((state) => state.postsByUserId);

  const posts = postsByUserId[Number(userId)] || [];

  useEffect(() => {
    const id = Number(userId);
    if (!id) return;

    const { fetchUserById, fetchUserPosts } = useUserStore.getState();

    fetchUserById(id);
    fetchUserPosts(id);
  }, [userId]);

  const { name, email, phone, username, website, address, company } =
    selectedUser ?? {};

  if (loading)
    return (
      <div className="w-full">
        <Loader />
      </div>
    );

  if (error) return <p className="w-full text-center text-red-600">{error}</p>;

  return (
    <div>
      <button
        className="flex items-center gap-2 cursor-pointer mb-6"
        onClick={() => navigate("/users-list")}
      >
        <span>
          <ArrowLeft size={18} />
        </span>
        <p>Back</p>
      </button>
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
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Company
            </h3>

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
        <h3 className="text-md font-semibold text-gray-600 mb-0">
          Recent Posts
        </h3>

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
    </div>
  );
};

export default UserDetail;
