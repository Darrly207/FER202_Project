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
} from "lucide-react";

const JobDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Good morning, Maria</h1>
            <p className="text-gray-500">
              Here is your job listings statistic report from July 19 - July 25.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-400" />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              + Post a job
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-600 text-white p-6 rounded-lg">
            <div className="text-5xl font-bold mb-2">76</div>
            <div className="flex justify-between items-center">
              <span>New candidates to review</span>
              <ChevronRight />
            </div>
          </div>
          <div className="bg-emerald-400 text-white p-6 rounded-lg">
            <div className="text-5xl font-bold mb-2">3</div>
            <div className="flex justify-between items-center">
              <span>Schedule for today</span>
              <ChevronRight />
            </div>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <div className="text-5xl font-bold mb-2">24</div>
            <div className="flex justify-between items-center">
              <span>Messages received</span>
              <ChevronRight />
            </div>
          </div>
        </div>

        {/* Job Updates Section */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Job Updates</h2>
            <button className="text-blue-600 hover:text-blue-700">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6">
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
                <div className="flex gap-2 mb-4">
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
  );
};

export default JobDashboard;
