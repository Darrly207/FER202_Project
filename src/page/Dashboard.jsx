import {
  Bell,
  ChevronRight,
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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const JobDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("/LoginForm");
    }
  }, [user, navigate]);
  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
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
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex items-center p-2 bg-blue-50 text-blue-600 rounded cursor-pointer">
              <LayoutDashboard size={20} />
              <span className="ml-3">Dashboard</span>
            </div>
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <MessageSquare size={20} />
              <span className="ml-3">Messages</span>
              <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                1
              </span>
            </div>
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <Building2 size={20} />
              <span className="ml-3">Company Profile</span>
            </div>
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <Users size={20} />
              <span className="ml-3">All Applicants</span>
            </div>
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <Briefcase size={20} />
              <span className="ml-3">Job Listing</span>
            </div>
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <CalendarDays size={20} />
              <span className="ml-3">My Schedule</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xs font-semibold text-gray-400 mb-4 ">
              SETTINGS
            </div>
            <div className="space-y-2">
              <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                <Settings size={20} />
                <span className="ml-3">Settings</span>
              </div>
              <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                <HelpCircle size={20} />
                <span className="ml-3">Help Center</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
              <User size={20} />
              <span className="ml-3">
                {user ? user.fullName : "please login"}
              </span>
            </div>
            <div
              className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              <span className="ml-3">logout</span>
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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Good morning, Maria
              </h1>
              <p className="text-sm md:text-base text-gray-500">
                Here is your job listings statistic report from July 19 - July
                25.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Bell className="text-gray-400" />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                + Post a job
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-indigo-600 text-white p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold mb-2">76</div>
              <div className="flex justify-between items-center">
                <span>New candidates to review</span>
                <ChevronRight />
              </div>
            </div>
            <div className="bg-emerald-400 text-white p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="flex justify-between items-center">
                <span>Schedule for today</span>
                <ChevronRight />
              </div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold mb-2">24</div>
              <div className="flex justify-between items-center">
                <span>Messages received</span>
                <ChevronRight />
              </div>
            </div>
          </div>

          {/* Job Updates Section */}
          <div className="bg-white rounded-lg p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg md:text-xl font-bold">Job Updates</h2>
              <button className="text-blue-600 hover:text-blue-700">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  company: "Nomad",
                  title: "Social Media Assistant",
                  location: "Paris, France",
                  tags: ["Marketing", "Design"],
                  applied: 5,
                },
                {
                  company: "Nomad",
                  title: "Brand Designer",
                  location: "Paris, France",
                  tags: ["Business", "Design"],
                  applied: 5,
                },
                {
                  company: "Terraform",
                  title: "Interactive Developer",
                  location: "Berlin, Germany",
                  tags: ["Marketing", "Design"],
                  applied: 5,
                },
                {
                  company: "ClassPass",
                  title: "Product Designer",
                  location: "Berlin, Germany",
                  tags: ["Business", "Design"],
                  applied: 5,
                },
              ].map((job, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg mb-4"></div>
                  <div className="text-sm text-gray-500 mb-2">
                    {job.company} • {job.location}
                  </div>
                  <div className="font-semibold mb-4">{job.title}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tag === "Marketing"
                            ? "bg-orange-100 text-orange-600"
                            : tag === "Business"
                            ? "bg-green-100 text-green-600"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {job.applied} applied of 10 capacity
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(job.applied / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDashboard;
