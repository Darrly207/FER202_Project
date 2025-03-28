import {
  LayoutDashboard,
  MessageSquare,
  Building2,
  Users,
  Briefcase,
  CalendarDays,
  Settings,
  HelpCircle,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Link, Router, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    if (logout) {
      logout();
      Router("/");
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center border-b">
        <h1 className="font-bold">Job Dashboard</h1>
        <button onClick={toggleSidebar} className="text-gray-600">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - responsive */}
      <div
        className={`${
          sidebarOpen ? "fixed inset-0 z-50 bg-white" : "hidden"
        } md:block md:relative md:w-64 bg-white border-r`}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="space-y-2">
            <Link
              to={"/UserDashboard"}
              className="flex items-center p-2 bg-blue-50 text-blue-600 rounded cursor-pointer"
            >
              <LayoutDashboard size={20} />
              <span className="ml-3">Dashboard</span>
            </Link>
            <Link
              to={"/messages/MessageCenter"}
              className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer"
            >
              <MessageSquare size={20} />
              <span className="ml-3">Messages</span>
              <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                1
              </span>
            </Link>
            <Link
              to={"/user/Profile"}
              className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer"
            >
              <Building2 size={20} />
              <span className="ml-3">My Public Profile</span>
            </Link>
            <Link
              to={"/FindCompaniesPage"}
              className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer"
            >
              <Users size={20} />
              <span className="ml-3">Browse Companies</span>
            </Link>
            <Link
              to={"/UserAppliancesPage"}
              className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer"
            >
              <Briefcase size={20} />
              <span className="ml-3">My Applications</span>
            </Link>
            <div className="mt-8">
              <div className="text-xs font-semibold text-gray-400 mb-4 ">
                SETTINGS
              </div>
              <div className="space-y-2">
                <Link
                  to={"/company/Setting"}
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer"
                >
                  <Settings size={20} />
                  <span className="ml-3">Settings</span>
                </Link>
                <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                  <HelpCircle size={20} />
                  <span className="ml-3">Help Center</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <User size={20} />
              <span className="ml-3">{user.fullName}</span>
            </div>
            <div
              className="flex items-center p-2 text-red-600 hover:bg-red-50 rounded cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              <span className="ml-3">Logout</span>
            </div>
          </div>
          {/* Close button only for mobile */}
          <div className="mt-8 md:hidden">
            <button
              onClick={toggleSidebar}
              className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer w-full"
            >
              <X size={20} />
              <span className="ml-3">Close Menu</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
