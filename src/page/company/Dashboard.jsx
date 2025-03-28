import { Bell, ChevronRight } from "lucide-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBarCompany"; // Import the new Sidebar component
const JobDashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/LoginForm");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Import Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Good morning, {user?.fullName || "Darrly"}!
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
