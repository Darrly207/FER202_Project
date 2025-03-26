import { Link, useLocation } from "react-router-dom";
import { Avatar } from "./avatar";

const Sidebar = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 flex flex-col justify-between">
      {/* Logo */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-indigo-600">Jobfinder</h2>
      </div>

      {/* Menu Items */}
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`flex items-center p-2 rounded-lg ${
                location.pathname === "/"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              🏠 <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={`flex items-center p-2 rounded-lg ${
                location.pathname === "/messages"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              💬 <span className="ml-3">Messages</span>
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                1
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/company/Profile"
              className={`flex items-center p-2 rounded-lg ${
                location.pathname === "/company-profile"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              🏢 <span className="ml-3">Company Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/seeker-profile"
              className={`flex items-center p-2 rounded-lg ${
                location.pathname === "/seeker-profile"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              👤 <span className="ml-3">Seeker Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className={`flex items-center p-2 rounded-lg ${
                location.pathname === "/jobs"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              📋 <span className="ml-3">Job Listing</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t flex items-center">
        <Avatar
          className="w-10 h-10 rounded-full"
          src="https://via.placeholder.com/50"
          alt="Maria Kelly"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">Maria Kelly</p>
          <p className="text-xs text-gray-500">maria.kelly@mail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
